## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Replace `<db_password>` in `.env` with your MongoDB Atlas database user's rotated password.
4. Start the API with `npm run dev`.

If your network's DNS cannot resolve the MongoDB SRV record, add
`MONGO_DNS_SERVERS=8.8.8.8,1.1.1.1` to `.env` (or use DNS servers approved for your network).

The `.env` file is ignored by Git. Keep database credentials out of source control.

<img width="878" height="729" alt="Get" src="https://github.com/user-attachments/assets/d08f4677-6897-4629-b217-290fddd45cbc" />
<img width="870" height="721" alt="Post" src="https://github.com/user-attachments/assets/e681b788-0e1a-4d8f-82a1-7abdba2f9f23" />
<img width="882" height="658" alt="PUT" src="https://github.com/user-attachments/assets/56221928-7bb9-4b9c-9c45-b4a52f077593" />
<img width="864" height="684" alt="PATCH" src="https://github.com/user-attachments/assets/eb135ce9-5fde-46ae-8bb7-cd85c1c9fbe3" />
<img width="869" height="470" alt="DELETE" src="https://github.com/user-attachments/assets/93073c3d-6036-482a-8472-638a061e1511" />
<img width="853" height="674" alt="GET_Summary" src="https://github.com/user-attachments/assets/ed7bad98-b6fb-49f8-aedd-68348218486e" />
<img width="866" height="676" alt="LAST_PATCH" src="https://github.com/user-attachments/assets/dcad6b0c-2597-43c7-a432-857abbf10dd5" />
