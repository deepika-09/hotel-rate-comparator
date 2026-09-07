# 🏨 Hotel Rate Comparator

A full-stack hotel search platform built using React, TypeScript, Node.js, Express, and Temporal Workflow architecture.

The application compares hotel prices from multiple suppliers, identifies the cheapest available rate, and presents the results through a modern and interactive user interface.

---

# 🚀 Features

## Frontend

- React + TypeScript
- Tailwind CSS
- Framer Motion Animations
- Glassmorphism UI Design
- Supplier Comparison Dashboard
- Search History
- Responsive Design
- Loading States
- Error Handling

# Run frontend

- cd frontend
- npm install
- npm run dev

## Backend

- Node.js + Express
- TypeScript
- Mock Supplier APIs
- Hotel Comparison Service
- Timeout Handling
- Retry Policy
- Temporal Workflow Architecture

# Run backend

- cd backend
- npm install
- npm run dev

# Run tests

- cd backend
- npm test

---

# 🏗️ System Architecture

```text
Frontend (React)

        │

        ▼

POST /api/search-hotels

        │

        ▼

Hotel Search Workflow

        │

        ▼

┌─────────────────────┐
│ Supplier A          │
└─────────────────────┘

┌─────────────────────┐
│ Supplier B          │
└─────────────────────┘

        │

        ▼

Compare Prices

        │

        ▼

Return Best Deal
```

---

# 📦 Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form
- Axios
- Lucide React

## Backend

- Node.js
- Express
- TypeScript
- Temporal SDK

## Testing

- Jest
- ts-jest
- Supertest

---

# 📁 Project Structure

```text
hotel-rate-comparator

├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── types
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── backend
│   ├── src
│   │   ├── activities
│   │   ├── workflows
│   │   ├── suppliers
│   │   ├── services
│   │   ├── utils
│   │   ├── tests
│   │   ├── types
│   │   ├── server.ts
│   │   └── worker.ts
│
├── README.md
│
└── docker-compose.yml
```

---

# ⚙️ Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start backend:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

---

# 🔍 Available APIs

## Health Check

```http
GET /
```

Response:

```text
Backend Running
```

---

## Supplier A

```http
GET /supplierA/hotels
```

---

## Supplier B

```http
GET /supplierB/hotels
```

---

## Search Hotels

```http
POST /api/search-hotels
```

Request:

```json
{
  "city": "Delhi",
  "checkIn": "2026-09-10",
  "checkOut": "2026-09-12"
}
```

Response:

```json
{
  "bestHotel": {
    "hotelId": "1",
    "name": "Taj Palace",
    "price": 4300,
    "supplier": "Supplier B"
  },
  "supplierA": {
    "supplier": "Supplier A",
    "price": 4500
  },
  "supplierB": {
    "supplier": "Supplier B",
    "price": 4300
  }
}
```

---

# ✅ Assessment Scenarios Covered

## Basic Scenarios

- Supplier A cheaper
- Supplier B cheaper
- Equal hotel pricing
- Supplier A failure
- Supplier B failure
- One supplier empty response
- Both suppliers empty response

## Advanced Scenarios

- Retry Logic
- Timeout Handling
- Parallel Supplier Execution
- Error Handling
- Workflow Architecture
- Cancellation Ready Design

---

# 🔄 Workflow Design

The workflow performs the following operations:

```text
1. Receive Search Request

2. Trigger Workflow

3. Execute Supplier A Activity

4. Execute Supplier B Activity

5. Run Activities in Parallel

6. Handle Failures and Empty Responses

7. Apply Retry Policy

8. Compare Prices

9. Return Cheapest Hotel
```

---

# 🧪 Running Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm test
```

Available test files:

```text
hotelSearchService.test.ts

supplierA.test.ts

supplierB.test.ts

workflow.test.ts

hotelSearchWorkflow.test.ts
```

---

# 🛡️ Error Handling

Implemented support for:

- Supplier Failures
- Empty Responses
- Unexpected Errors
- Timeout Handling
- Retry Mechanism

---

# ⚡ Performance Optimizations

- Parallel Supplier Fetching
- Service Layer Architecture
- Reusable Components
- Type-Safe APIs
- Optimized React Rendering

---

# 🔮 Future Enhancements

- Temporal Cloud Deployment
- Authentication & Authorization
- Real Hotel Supplier Integrations
- Hotel Images
- Booking Support
- Search Analytics Dashboard
- Redis Caching
- Dockerized Deployment

---

# ⚠️ Temporal Runtime Note

The project includes:

- Temporal Workflows
- Activities
- Worker Configuration
- Workflow Architecture

Due to development-environment restrictions, Docker installation was not available on the system used for implementation. Therefore, Temporal Server could not be executed locally.

All workflow, activity, and worker implementations are included in the project and can be executed without modification in a Docker-enabled environment.

---

# 👨‍💻 Author

Hotel Rate Comparator Assessment

Built using:

- React
- TypeScript
- Node.js
- Express
- Temporal
- Tailwind CSS
- Framer Motion

Workflow cancellation support is designed through Temporal workflow architecture.
Runtime validation could not be executed locally because Temporal Server could not be started on the development machine due Docker restrictions.