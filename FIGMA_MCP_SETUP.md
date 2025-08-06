# Figma MCP Setup Guide

This guide will help you connect to Figma using the Model Context Protocol (MCP).

## Prerequisites

- Node.js and npm installed
- Figma account
- Figma access token

## Installation

The Figma MCP server has been installed globally:

```bash
npm install -g figma-developer-mcp
```

## Getting Your Figma Access Token

1. Go to [Figma Settings](https://www.figma.com/settings)
2. Navigate to the "Personal access tokens" section
3. Click "Create new token"
4. Give your token a name (e.g., "MCP Integration")
5. Copy the generated token

## Configuration

1. Open `.cursor/mcp.json` in your project
2. Replace `YOUR_FIGMA_ACCESS_TOKEN_HERE` with your actual Figma access token:

```json
{
  "mcpServers": {
    "figma": {
      "command": "figma-developer-mcp",
      "args": [],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your_actual_token_here"
      }
    }
  }
}
```

## Usage

Once configured, you can use the Figma MCP server to:

- Access Figma files and designs
- Extract design tokens
- Download assets
- Read design specifications

## Available Commands

The Figma MCP server provides various tools for interacting with Figma:

- File access and reading
- Asset downloading
- Design token extraction
- Component information retrieval

## Security Note

Keep your Figma access token secure and never commit it to version control. Consider using environment variables for production environments.

## Troubleshooting

If you encounter issues:

1. Verify your access token is correct
2. Ensure the MCP server is properly installed
3. Check that Cursor is configured to use the MCP server
4. Restart Cursor after making configuration changes
