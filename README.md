```markdown
примеры запросов (через ngrok)
создать пользователя
curl -X POST https://d391-2001-f40-956-164a-8858-8ed5-7179-ac48.ngrok-free.app/users \
-H "Content-Type: application/json" \
-d '{"name": "rahym", "email": "rahym@example.com"}'
```

### получить список всех пользователей

```bash
curl https://d391-2001-f40-956-164a-8858-8ed5-7179-ac48.ngrok-free.app/users

```
