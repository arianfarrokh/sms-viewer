from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from pydantic import BaseModel
import json
from datetime import datetime
import time
import re

app = FastAPI()

# فایل JSON برای ذخیره پیام‌ها
STORE_FILE = Path("sms_store.json")

# CORS برای اتصال Frontend روی localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # آدرس Frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

# مدل Pydantic برای پیام
class SMS(BaseModel):
    from_: str
    body: str
    receivedAt: str = None

# خواندن پیام‌ها از فایل
def read_messages():
    if not STORE_FILE.exists():
        return []
    with STORE_FILE.open("r", encoding="utf-8") as f:
        return json.load(f)

# نوشتن پیام‌ها در فایل
def write_messages(data):
    with STORE_FILE.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

# تابع کمکی برای تشخیص نوع تراکنش و مقدار از متن پیام
def parse_message_body(body: str):
    body_lower = body.lower()
    # بررسی Deposit
    deposit_match = re.search(r'deposit\s*([\d,]+)', body_lower)
    if deposit_match:
        amount = int(deposit_match.group(1).replace(",", ""))
        return "deposit", amount

    # بررسی Withdraw
    withdraw_match = re.search(r'withdraw\s*([\d,]+)', body_lower)
    if withdraw_match:
        amount = int(withdraw_match.group(1).replace(",", ""))
        return "withdraw", amount

    # اگر چیزی پیدا نشد
    return "unknown", 0

# Endpoint برای دریافت پیام‌ها
@app.get("/messages")
def get_messages():
    return read_messages()

# Endpoint برای ارسال پیام جدید
@app.post("/sms")
def post_sms(sms: SMS, x_sms_secret: str = Header(None)):
    SECRET = "mytestsecret"
    if x_sms_secret != SECRET:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    receivedAt = sms.receivedAt or datetime.utcnow().isoformat()
    messages = read_messages()

    # محاسبه type و amount
    txn_type, amount = parse_message_body(sms.body)

    # محاسبه موجودی جدید
    last_balance = messages[-1]["balance"] if messages else 0
    if txn_type == "deposit":
        balance = last_balance + amount
    elif txn_type == "withdraw":
        balance = last_balance - amount
    else:
        balance = last_balance

    messages.append({
        "id": int(time.time() * 1000),
        "from": sms.from_,
        "body": sms.body,
        "type": txn_type,
        "amount": amount,
        "balance": balance,
        "receivedAt": receivedAt
    })
    write_messages(messages)
    return {"success": True, "message": "Stored successfully", "balance": balance}
