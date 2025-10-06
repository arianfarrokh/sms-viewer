from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json
from datetime import datetime

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

# خواندن پیام‌ها از فایلp
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
def post_sms(from_: str, body: str, receivedAt: str = None, x_sms_secret: str = Header(None)):
    SECRET = "mytestsecret"  # توکن امنیتی
    if x_sms_secret != SECRET:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    receivedAt = receivedAt or datetime.utcnow().isoformat()
    messages = read_messages()
    messages.append({
        "id": int(datetime.utcnow().timestamp()*1000),
        "from": from_,
        "body": body,
        "receivedAt": receivedAt
    })
    write_messages(messages)
    return {"success": True, "message": "Stored successfully"}
