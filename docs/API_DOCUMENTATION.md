# TechSolve API Documentation

## Overview

TechSolve's API provides backend functionality for the chatbot and other interactive features. Currently, the API consists of a single endpoint for handling AI-powered conversations.

## Chat API

### Endpoint: `/api/chat`

**Method**: `POST`

**Description**: Processes user messages and returns AI-generated responses. The API uses OpenRouter with the DeepSeek model for intelligent conversation handling and includes specialized logic for project and service inquiries.

### Request Format

```typescript
POST /api/chat
Content-Type: application/json
Authorization: Bearer {OPENROUTER_API_KEY}

{
  "messages": [
    {
      "role": "user" | "assistant" | "system",
      "content": "string"
    }
  ]
}
```

### Request Parameters

- `messages` (required): Array of message objects
  - `role` (required): Message sender type
    - `"user"`: Human input
    - `"assistant"`: AI response
    - `"system"`: System prompt
  - `content` (required): Message text

### Response Format

**Success Response** (200):
```typescript
{
  "message": "AI-generated response text",
  "type": "project_detail" | "projects_list" | "ai_response"
}
```

**Error Response** (4xx/5xx):
```typescript
{
  "error": "Error description",
  "message": "User-friendly error message"
}
```

### Response Types

- `ai_response`: Standard conversational response
- `project_detail`: Detailed information about a specific project
- `projects_list`: Overview of all available projects

### Special Features

#### Project Queries
The API automatically detects project-specific queries and returns detailed case study information including:
- Client information
- Industry focus
- Timeline and budget details
- Technical challenges
- Implemented solutions
- Quantifiable results
- Technologies used
- Key features
- Demo URLs (when available)

#### Project Recognition
The system recognizes projects by:
- Exact slug matches (`restaurant-inventory`, `clinic-management`, etc.)
- Natural language descriptions (`multi-location restaurant system`, `healthcare management`, etc.)

#### Fallback Handling
- Invalid inputs return graceful error messages
- API failures trigger fallback responses
- Rate limiting is handled by OpenRouter service

### Rate Limits
- Subject to OpenRouter API limits
- Free tier models have usage restrictions
- Consider upgrading to paid plans for production use

### Environment Variables Required

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
NEXT_PUBLIC_APP_URL=https://your-app-url.vercel.app
```

### Example Usage

#### Basic Conversation
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    messages: [{
      role: 'user',
      content: 'What services does TechSolve offer?'
    }]
  })
})
```

#### Project Query
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    messages: [{
      role: 'user',
      content: 'Tell me about the restaurant inventory project'
    }]
  })
})
```

### Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid request format
- **500 Internal Server Error**: OpenRouter API failure or server issues
- Fallback responses ensure user experience continuity

### Security Considerations

- API key is server-side only (not exposed to client)
- Messages are validated before processing
- OpenRouter handles content filtering and safety measures

### Future Endpoints

Potential future API expansions:
- Contact form submission
- Newsletter subscription
- Project inquiry handling
- Analytics data collection
- User session management
