# base images node
FROM node:20.10-alpine as build

# 建立容器內部的資料夾
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 複製外部工具包進容器中
COPY package.json .

# 安裝 外部工具包進內部
RUN npm install

# CMD node index.js

# 開port
EXPOSE 3030

# 下 command run node js
CMD ["npm", "start"]


# docker build -t nodedockerhellowworld .
# 其中 nodedockerhellowworld 為 自定義的名稱 所以是必須使用全小寫
