# LangGraph JavaScript/TypeScript Essentials

This directory contains TypeScript implementations of the LangGraph examples from the Python notebooks (L1.ipynb and L2.ipynb). All examples demonstrate the same concepts as the Python versions but leverage TypeScript for type safety and modern JavaScript tooling.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key (for L2 email workflow)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env and add your API keys

# Build TypeScript
npm run build

# Run basic demo
npm run dev
```

### Environment Setup

Create a `.env` file with your API keys:
```env
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

## 📚 Examples Overview

### L1: StateGraph Essentials

Learn the fundamental concepts of LangGraph through practical examples:

| Example | File | Concepts |
|---------|------|----------|
| Simple Node | `L1/simple-node.ts` | Basic state management, node functions |
| Parallel Execution | `L1/parallel-execution.ts` | Parallel edges, state merging |
| Conditional Edges | `L1/conditional-edges.ts` | Command-based routing, conditional logic |
| Memory | `L1/memory.ts` | State persistence, checkpointers |
| Interrupts | `L1/interrupts.ts` | Human-in-the-loop patterns |

### L2: Email Processing Workflow

A complete email processing system demonstrating:

- **Email Classification**: AI-powered intent and urgency detection
- **Parallel Processing**: Document search + bug ticket creation
- **Response Generation**: Context-aware email drafting
- **Human Review**: Interrupt-based approval workflow
- **State Persistence**: Multi-session conversation tracking

## 🎯 Running Examples

### Individual L1 Examples
```bash
# All L1 examples
npm run dev src/L1/index.ts

# Specific examples
npm run dev src/L1/simple-node.ts
npm run dev src/L1/parallel-execution.ts
npm run dev src/L1/conditional-edges.ts --interactive
npm run dev src/L1/memory.ts --multi-thread
npm run dev src/L1/interrupts.ts --programmatic
```

### L2 Email Workflow
```bash
# Single email processing
npm run dev src/L2/email-workflow.ts

# Batch processing
npm run dev src/L2/email-workflow.ts --batch

# Interactive demo
npm run dev src/L2/email-workflow.ts --interactive
```

### Demo Scripts
```bash
# Basic getting started demo
npm run dev src/examples/basic-usage.ts

# Comprehensive email demo
npm run dev src/examples/email-demo.ts
npm run dev src/examples/email-demo.ts --interactive
```

## 🏗️ Project Structure

```
js/
├── src/
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── utils/
│   │   ├── index.ts          # Common utilities
│   │   └── mermaid.ts        # Graph visualization helpers
│   ├── L1/                   # StateGraph essentials
│   │   ├── simple-node.ts
│   │   ├── parallel-execution.ts
│   │   ├── conditional-edges.ts
│   │   ├── memory.ts
│   │   ├── interrupts.ts
│   │   └── index.ts
│   ├── L2/
│   │   └── email-workflow.ts # Complete email processing workflow
│   └── examples/
│       ├── basic-usage.ts    # Getting started demo
│       └── email-demo.ts     # Email workflow demo
├── tests/                    # Test files
├── dist/                     # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Development Scripts

```bash
npm run build      # Compile TypeScript
npm run dev        # Run with hot reload (tsx)
npm run lint       # Run ESLint
npm run format     # Format with Prettier
npm run typecheck  # TypeScript type checking
npm run test       # Run tests
npm run clean      # Clean build directory
```

## 📊 Graph Visualization

The examples include console-based graph visualization for Node.js environments. For browser-based interactive visualization, the mermaid utilities in `utils/mermaid.ts` provide:

- `displayGraphInConsole()` - ASCII graph output
- `renderMermaidDiagram()` - Browser DOM rendering
- `createMermaidHTML()` - Standalone HTML generation

## 🎨 Key Differences from Python

### Type Safety
- Full TypeScript interfaces replace Python's `TypedDict`
- Compile-time type checking for state and node functions
- Generic type parameters for graph configurations

### Async/Await
- All LLM calls and node functions use modern async/await
- Promise-based execution model
- Non-blocking I/O operations

### Modern JavaScript
- ES modules with import/export
- Contemporary tooling (ESLint, Prettier, Vitest)
- Node.js readline for interactive examples

### Browser Compatibility
- Mermaid rendering works in both Node.js and browser environments
- Bundler-friendly module structure
- DOM-based graph visualization capabilities

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run specific test files
npm run test L1
npm run test L2
```

## 📖 Learning Path

1. **Start with basics**: Run `npm run dev src/examples/basic-usage.ts`
2. **Explore L1 concepts**: Work through each L1 example
3. **Build workflows**: Study the L2 email processing system
4. **Experiment**: Try the interactive modes and modify examples
5. **Build your own**: Use the patterns to create custom workflows

## 🤝 Comparison with Python Notebooks

This TypeScript implementation maintains functional parity with the Python notebooks while providing:

- **Better IDE support** with IntelliSense and type checking
- **Modern tooling** with hot reload and formatting
- **Production readiness** with proper error handling and logging
- **Browser compatibility** for frontend integration
- **Modular structure** for better code organization

## 🔗 Related Resources

- [LangGraph.js Documentation](https://langchain-ai.github.io/langgraphjs/)
- [LangChain TypeScript](https://js.langchain.com/)
- [Python notebooks](../python/) in this repository
- [Shared assets](../assets/) for images and diagrams

## 🐛 Troubleshooting

### Common Issues

1. **API Key Errors**
   - Ensure `.env` file exists with valid keys
   - Check API key permissions and quotas

2. **Type Errors**
   - Run `npm run typecheck` to identify issues
   - Ensure all imports use `.js` extensions (required for ES modules)

3. **Runtime Errors**
   - Build first: `npm run build`
   - Check Node.js version (18+ required)

4. **Interactive Examples Not Working**
   - Some interactive examples may not work in certain terminal environments
   - Try the programmatic versions with `--programmatic` flag

### Getting Help

- Check the console output for detailed error messages
- Review the [setup_js.txt](../setup_js.txt) file for implementation notes
- Compare with the Python implementation for reference behavior