# Deploying SwingyFy to Netlify

This guide will help you deploy your Next.js application to Netlify.

## Prerequisites

1. A Netlify account (sign up at [netlify.com](https://www.netlify.com))
2. (Optional) Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket) - **Not required for CLI method**

## Method 1: Deploy via Netlify UI (Recommended)

### Step 1: Push your code to Git

First, make sure your code is in a Git repository (GitHub, GitLab, or Bitbucket):

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Ready for deployment"

# If you already have a remote repository
git remote add origin <your-repository-url>
git push -u origin main

# If you need to create a new repository on GitHub:
# 1. Go to github.com and create a new repository
# 2. Copy the repository URL
# 3. Run the commands above with your repository URL
```

### Step 2: Sign up / Login to Netlify

1. Go to **[app.netlify.com](https://app.netlify.com)**
2. If you don't have an account, click **"Sign up"** (you can use GitHub, GitLab, Bitbucket, or email)
3. If you already have an account, click **"Log in"**

### Step 3: Import Your Project

1. Once logged in, you'll see the Netlify dashboard
2. Click the **"Add new site"** button (usually in the top right or center)
3. Select **"Import an existing project"**

### Step 4: Connect Your Git Provider

1. You'll see options for **GitHub**, **GitLab**, or **Bitbucket**
2. Click on the Git provider where your code is hosted (e.g., **GitHub**)
3. You'll be asked to authorize Netlify to access your repositories
4. Click **"Authorize"** and follow the authentication steps
5. Grant the necessary permissions

### Step 5: Select Your Repository

1. After authorization, you'll see a list of your repositories
2. Find and click on your **swingyfy-landing** (or your repository name)
3. Click **"Next"** or **"Select"**

### Step 6: Configure Build Settings

Netlify should auto-detect Next.js, but **verify these settings**:

**Basic build settings:**
- **Branch to deploy:** `main` (or `master` - your main branch)
- **Build command:** `npm run build` (should be auto-filled)
- **Publish directory:** Leave this **EMPTY** or set to `.next` (the Netlify plugin handles it)

**Advanced settings (optional - click "Show advanced"):**
- **Node version:** `18` or higher (Netlify usually auto-detects this)

**Important:** The `netlify.toml` file in your project will automatically configure these settings, so you can mostly use the defaults.

### Step 7: Deploy Your Site

1. Review the settings one more time
2. Click the **"Deploy site"** button
3. You'll see a build log showing the deployment progress
4. Wait for the build to complete (usually 2-5 minutes)

### Step 8: Your Site is Live! 🎉

1. Once the build completes successfully, you'll see **"Site is live"**
2. Your site will have a URL like: `https://random-name-123.netlify.app`
3. Click on the URL to view your deployed site
4. You can also click **"Open production deploy"** to see your live site

### Step 9: (Optional) Change Site Name

To customize your site URL:

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter your desired name (e.g., `swingyfy`)
4. Your new URL will be: `https://swingyfy.netlify.app`

## Method 2: Deploy via Netlify CLI (No Git Required! ⭐)

This method allows you to deploy directly from your computer **without needing GitHub or any Git repository**.

### Step 1: Install Netlify CLI

Open your terminal in the project folder and run:

```bash
npm install -g netlify-cli
```

Or if you prefer using npx (no installation needed):

```bash
npx netlify-cli deploy --prod
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will:
- Open your browser
- Ask you to authorize the CLI
- Return to the terminal once authorized

### Step 3: Build Your Project First

Make sure your project builds successfully:

```bash
npm run build
```

If the build succeeds, you're ready to deploy!

### Step 4: Deploy to Netlify

**Option A: Quick Deploy (Recommended for first time)**

```bash
netlify init
```

Follow the prompts:
- **Create & configure a new site:** Yes
- **Team:** Select your team (or use default)
- **Site name:** Press Enter for a random name, or type a custom name
- **Build command:** `npm run build` (should auto-detect)
- **Directory to deploy:** Leave empty or type `.next` (the plugin handles it)

**Option B: Direct Deploy (If you've already initialized)**

```bash
# Deploy to production
netlify deploy --prod

# Or deploy to a draft URL first (for testing)
netlify deploy
```

### Step 5: Your Site is Live! 🎉

After deployment completes, you'll see:
- Your site URL (e.g., `https://your-site-name.netlify.app`)
- A link to view your site

### Step 6: (Optional) Update Site Settings

To change your site name or settings later:

```bash
netlify open:admin
```

This opens your Netlify dashboard in the browser.

---

## Method 3: Deploy via Netlify CLI (One-Command Deploy)

If you want the fastest deployment without any setup:

```bash
# This will login, build, and deploy in one go
npx netlify-cli deploy --prod --dir=.next --build="npm run build"
```

**Note:** You'll still need to login the first time, but after that, this command will:
1. Build your project
2. Deploy to Netlify
3. Give you a live URL

---

## Quick Comparison

| Method | Requires Git? | Requires CLI? | Best For |
|--------|--------------|--------------|----------|
| **Method 1 (UI + Git)** | ✅ Yes | ❌ No | Continuous deployment, teams |
| **Method 2 (CLI)** | ❌ No | ✅ Yes | Quick deployment, no Git needed |
| **Method 3 (One-Command)** | ❌ No | ✅ Yes | Fastest deployment |

---

## Method 4: Manual Drag & Drop (Not Recommended for Next.js)

⚠️ **Note:** This method doesn't work well for Next.js apps because Next.js needs to be built on Netlify's servers. However, if you want to try:

1. Build your project: `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag and drop the `.next` folder to the deploy area
4. **Limitation:** This won't work properly for Next.js server-side features

**Recommendation:** Use Method 2 (CLI) instead - it's just as easy and works correctly!

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Initialize and Deploy

```bash
# Initialize (first time only)
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Set build command: npm run build
# - Set publish directory: .next (or leave empty)

# Deploy
netlify deploy --prod
```

## Important Notes

### Netlify Next.js Plugin

The `netlify.toml` file includes the `@netlify/plugin-nextjs` plugin. Netlify will automatically install this plugin during the build process. This plugin:
- Handles Next.js routing correctly
- Optimizes serverless functions
- Enables ISR (Incremental Static Regeneration)
- Handles API routes

### Environment Variables

If you have environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add your variables (e.g., API keys, database URLs)
3. Redeploy your site

### Custom Domain

To add a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

### Build Settings Summary

- **Framework:** Next.js
- **Build command:** `npm run build`
- **Publish directory:** `.next` (handled by plugin)
- **Node version:** 18 or higher
- **Plugin:** `@netlify/plugin-nextjs` (auto-installed)

## Troubleshooting

### Build Fails

1. Check the build logs in Netlify dashboard
2. Ensure Node version is 18 or higher
3. Verify all dependencies are in `package.json`
4. Check for TypeScript errors: `npm run lint`

### Routing Issues

- The Netlify Next.js plugin handles routing automatically
- Ensure `netlify.toml` is in the root directory
- Check that all routes are properly defined in your Next.js app

### Environment Variables Not Working

- Make sure variables are set in Netlify dashboard
- Redeploy after adding new variables
- Use `process.env.VARIABLE_NAME` in your code

## Continuous Deployment

Once connected, Netlify will automatically deploy:
- Every push to your main branch
- Pull requests get preview deployments
- You can trigger manual deploys from the dashboard

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/nextjs/)
- [Netlify Support](https://www.netlify.com/support/)

