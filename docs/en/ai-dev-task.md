# AI Dev Tasks

A structured workflow for AI-assisted development using markdown prompts. Break down complex features into manageable, step-by-step tasks with built-in verification checkpoints.

## Core Workflow

### 1. Create PRD
Use `@plan/create-prd.md` to generate a Product Requirement Document:
```
Use @plan/create-prd.md
Here's the feature I want to build: [Describe your feature]
```

### 2. Generate Tasks
Use `@plan/generate-tasks.md` to break down the PRD into actionable tasks:
```
Now take @MyFeature-PRD.md and create tasks using @plan/generate-tasks.md
```

### 3. Process Tasks
Use `@plan/process-task-list.md` to work through tasks one by one:
```
Please start on task 1.1 and use @plan/process-task-list.md
```

### 4. Review & Approve
- Review each completed task
- Reply "yes" to approve and move to next task
- Provide feedback if changes needed

## Files

- **`plan/create-prd.md`** - Generate Product Requirement Documents
- **`plan/generate-tasks.md`** - Break PRDs into actionable task lists  
- **`plan/process-task-list.md`** - Process tasks step-by-step with approval checkpoints

## Benefits

- **Structured Development** - Clear process from idea to code
- **Step-by-Step Verification** - Review and approve each change
- **Manages Complexity** - Breaks large features into digestible tasks
- **Improved Reliability** - More dependable than single large prompts
- **Progress Tracking** - Visual representation of completed work

## Usage Tips

- Be specific with feature descriptions
- Use capable AI models for best results
- Break down tasks further if AI struggles
- Guide and iterate as needed
