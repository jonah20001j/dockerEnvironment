# 使用官方 ngrok 映像
FROM wernight/ngrok

# 設置 ngrok 命令
CMD ["sh", "-c", "ngrok authtoken ${NGROK_AUTHTOKEN} && ngrok http flask:5000"]
