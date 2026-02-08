from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Preformatted
from reportlab.lib.styles import getSampleStyleSheet

content = """

# Day 1 – Prisma Auth API

## Stack

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt

## Features

- User Register
- User Login
- Password hashing
- JWT token generation
- Protected route middleware

## Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET /api/auth/me (protected)

## Concepts Learned

- Prisma Client usage
- SQL schema with Prisma
- JWT authentication
- Middleware for protected routes
- Password hashing with bcrypt

## Run Project

npm install  
npx prisma migrate dev  
npm run dev
"""

doc = SimpleDocTemplate("/mnt/data/README_Day1_PrismAuth.pdf")
styles = getSampleStyleSheet()
elements = [Paragraph("Day 1 – Prisma Auth API", styles["Title"]), Spacer(1,12),
Preformatted(content, styles["Code"])]

doc.build(elements)

"/mnt/data/README_Day1_PrismAuth.pdf"
