# Photography Portfolio Demo - Reusable Prompt Template

## Task Configuration

TASK_NUMBER = [INSERT_TASK_NUMBER]

TASK_NAME = [INSERT_TASK_NAME_FROM_DEMO_TASKLIST]

**Can you please utilize desktop-commander get_config and identify the tools you will use to implement Task [TASK_NUMBER] to completion? Utilize clear-thought, puppeteer, and desktop-commander as you see fit to think through/plan/map, implement, and verify.**

## Project Context: Elena Vasquez Photography Portfolio

I'm demonstrating a systematic LLM-driven development process using MCP tools to build a professional photography portfolio website. Please reference `demo_tasklist.md` for the complete project vision and task breakdown.

**⚠️ DEMO REQUIREMENTS**
- This is a demonstration of systematic task-based development
- Each task should build logically on previous completed tasks
- Use ONLY the specified tech stack: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- Run development server on port 3001 (port 3000 is in use)
- Focus on production-quality output that could represent a real photographer

**Project Vision:**
- **Photographer**: Elena Vasquez - Travel & Cultural Photography specialist
- **Brand**: "Capturing the soul of places through the people who call them home"
- **Style**: Warm, authentic, documentary-style with rich earth tones
- **Target**: Professional portfolio to attract travel magazines, cultural organizations

**Brand Identity & Design System:**
```css
/* Elena's Brand Colors */
--terracotta: #d2691e;      /* Warm, earthy primary */
--forest-green: #2d5016;    /* Deep, natural secondary */
--cream: #f5f5dc;           /* Soft, warm neutral */
--charcoal: #36454f;        /* Professional dark */
--warm-white: #fefefe;      /* Clean background */

/* Typography */
--font-heading: 'Playfair Display', serif;  /* Elegant, editorial */
--font-body: 'Source Sans Pro', sans-serif; /* Clean, readable */
```**Homepage Wireframe Reference:**
```
┌─────────────────────────────────────────────────────────────┐
│                    ELENA VASQUEZ                            │
│              [Travel & Cultural Photography]                │
│                                                             │
│  [Portfolio] [About] [Services] [Contact] [Blog]           │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              [HERO IMAGE - Full Width]                     │
│                 Moroccan Market Scene                       │
│                                                             │
│         "Capturing the soul of places through              │
│          the people who call them home"                    │
│                                                             │
│              [VIEW MY WORK] [CONTACT ME]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    FEATURED WORK                            │
│                                                             │
│  [IMG1]      [IMG2]      [IMG3]      [IMG4]               │
│  Morocco     Peru        Japan       India                 │
│  Markets     Festivals   Temples     Villages              │
│                                                             │
│              [EXPLORE ALL GALLERIES]                       │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     ABOUT ELENA                             │
│                                                             │
│  [Portrait]    "With over 8 years documenting cultures     │
│                 across 40+ countries, I specialize in      │
│                 authentic storytelling through imagery     │
│                 that reveals the heart of communities."    │
│                                                             │
│                        [LEARN MORE]                         │
└─────────────────────────────────────────────────────────────┘
```

**Site Architecture:**
```
Homepage → Portfolio → About → Services → Contact
   ↓         ↓         ↓        ↓         ↓
Hero      Galleries  Story   Packages  Inquiry
Impact    by Region  Trust   Value     Action
```

**Technical Stack:**
- **Framework**: Next.js 14 (React, TypeScript)
- **Styling**: Tailwind CSS + Custom Design System
- **Images**: Next.js Image + Unsplash API (stock photos)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Development**: Local server on port 3001
- **Deployment**: Netlify with automatic GitHub integration
- **Testing**: Puppeteer for visual validation**Current Session Focus:**
Work on **Task [TASK_NUMBER]: [TASK_NAME FROM DEMO_TASKLIST.MD]**

**Implementation Requirements:**
1. **Follow the Wireframe**: Use the ASCII wireframe as your visual guide for layout and structure
2. **Apply Brand Identity**: Implement Elena's color palette and typography consistently
3. **Build on Previous Tasks**: Ensure this task integrates with previously completed work
4. **Production Quality**: Create code and design that could represent a real photographer
5. **Use Stock Images**: Source appropriate travel/cultural photography from Unsplash
6. **Responsive Design**: Ensure all layouts work on mobile, tablet, and desktop
7. **Performance Focus**: Optimize images and code for fast loading
8. **Deployment Ready**: Ensure code is compatible with Netlify static hosting (Task 10 includes deployment)

**Available MCP Tools:**
- **desktop-commander**: File operations, project setup, development server management
- **clear-thought**: Strategic thinking, problem-solving, decision-making, planning
- **puppeteer**: Visual testing, screenshots, browser automation for verification

**Quality Standards:**
✅ Matches Elena's brand identity and wireframe design
✅ Implements the specific task requirements from demo_tasklist.md
✅ Uses production-quality code and professional design
✅ Integrates seamlessly with existing project structure
✅ Includes appropriate stock photography and compelling copy
✅ Responsive design that works across all devices
✅ Performance optimized with fast loading times

**Methodology:**
1. **Configuration Assessment**: Use desktop-commander get_config to understand environment
2. **Strategic Planning**: Use clear-thought tools for task analysis and approach planning
3. **Implementation**: Execute the planned solution using desktop-commander
4. **Visual Verification**: Use puppeteer to capture screenshots and verify design
5. **Quality Check**: Ensure task completion meets all success criteria

**Success Criteria:**
Reference the specific success criteria for Task [TASK_NUMBER] in demo_tasklist.md. Each task should move the project closer to a professional portfolio that Elena could use to attract real clients.

**End Goal:** 
Complete Task [TASK_NUMBER] as part of building a stunning, professional photography portfolio that demonstrates the power of systematic, LLM-driven development using MCP tools.

Focus entirely on **Task [TASK_NUMBER]: [TASK_NAME]** while maintaining consistency with Elena's brand identity and the overall project vision.