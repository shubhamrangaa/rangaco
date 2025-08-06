# Figma Selection Extraction Guide

Now that your Figma MCP is configured, here's how to extract your Figma selection data:

## 🔄 Restart Cursor First

After updating the MCP configuration, restart Cursor to load the new settings.

## 📋 How to Extract Your Figma Selection

### Step 1: Get Your Figma File URL

1. Open your Figma file
2. Select the design elements you want to extract
3. Copy the URL from your browser (it should look like: `https://www.figma.com/file/...`)

### Step 2: Use the MCP Server

Once Cursor is restarted, you can:

1. **Paste the Figma URL** in Cursor's chat
2. **Ask Cursor to extract the design data** from your selection
3. **Request specific information** like:
   - Layout and positioning
   - Colors and typography
   - Component structure
   - Asset URLs
   - Design tokens

### Step 3: Example Commands

Try these commands in Cursor's chat:

```
"Extract the design data from this Figma file: [YOUR_FIGMA_URL]"
```

```
"Get the layout and styling information for the selected elements in this Figma file: [YOUR_FIGMA_URL]"
```

```
"Extract design tokens (colors, typography, spacing) from this Figma selection: [YOUR_FIGMA_URL]"
```

```
"Get the component structure and hierarchy from this Figma file: [YOUR_FIGMA_URL]"
```

## 🎯 What Data You'll Get

The MCP server will provide:

- **Layout information**: Positioning, sizing, spacing
- **Styling data**: Colors, typography, effects
- **Component structure**: Hierarchy and relationships
- **Asset information**: Images, icons, and other resources
- **Design tokens**: Reusable design values

## 🔧 For Anima Integration

Once you have the extracted data, you can:

1. **Use the data with Anima's API** to generate code
2. **Manually convert the design data** to your preferred framework
3. **Use the layout information** to structure your components
4. **Apply the styling data** to match the design exactly

## 📝 Example Workflow

1. **Extract**: Get design data from Figma using MCP
2. **Process**: Use the data to understand the design structure
3. **Generate**: Use Anima or manual coding to create the implementation
4. **Refine**: Adjust based on the extracted specifications

## 🚀 Next Steps

1. Restart Cursor
2. Open your Figma file and select your design elements
3. Copy the Figma URL
4. Paste it in Cursor's chat and ask for extraction
5. Use the extracted data with Anima or for manual implementation

The MCP server will provide clean, relevant design data that's optimized for AI processing, making it much more accurate than screenshots!
