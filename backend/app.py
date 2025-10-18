from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from pydantic import BaseModel
import json
from datetime import datetime
import os
import time

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

# Endpoint برای دریافت پیام‌ها
@app.get("/messages")
def get_messages():
    return read_messages()

# Endpoint برای ارسال پیام جدید
@app.post("/sms")
def post_sms(sms: SMS, x_sms_secret: str = Header(None)):
    SECRET = "mytestsecret"  # توکن امنیتی
    if x_sms_secret != SECRET:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    receivedAt = sms.receivedAt or datetime.utcnow().isoformat()
    messages = read_messages()
    messages.append({
        "id": int(time.time() * 1000),
        "from": sms.from_,
        "body": sms.body,
        "receivedAt": receivedAt
    })
    write_messages(messages)
    return {"success": True, "message": "Stored successfully"}
