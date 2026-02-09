import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Copy } from 'lucide-react';

const blogPostsData = [
  {
    id: 1,
    title: 'Complete Guide to Installing WordPress CMS',
    excerpt: 'Learn how to install and configure WordPress CMS from scratch.',
    slug: 'installing-wordpress-cms',
    date: 'November 20, 2025',
    author: 'Ved Hingu',
    category: 'WordPress',
    readTime: 8,
    image: `
     <img
          src="/images/wordpressinstall/howtoinstallwordpress.jpg"
          alt="howtoinstallwordpress"
          className="w-full h-96 object-cover rounded-2xl"
        ></img>`
    ,
    content: `
<div class="space-y-8">

  <div class="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-accent-teal rounded-lg p-6 font-poppins">
    <h2 class="text-2xl font-bold text-primary-900 mb-4">🚀 Introduction</h2>
    <p class="text-gray-700 leading-relaxed">
      Local WP helps you create a WordPress website on your computer without
      hosting or a domain. This guide will walk you through installing Local WP
      and setting up your first WordPress site easily.
    </p>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <h2 class="text-2xl font-bold text-primary-900 mb-6 font-poppins flex items-center gap-3"><span class="inline-flex items-center justify-center w-8 h-8 bg-accent-teal text-white rounded-full text-sm font-bold">1</span>Download Local WP</h2>
    <ol class="space-y-6 text-gray-700">
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Open your browser and search for <strong class="text-primary-900 font-semibold">Local WP</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\1.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Click the official website and press <strong class="text-primary-900 font-semibold">Download</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\2.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Select your platform (Windows/Mac/Linux).</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\4.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Enter your first & last name.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\5.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Choose your organization type.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\6.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Enter your email and click <strong class="text-primary-900 font-semibold">Get It Now</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\7.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
    </ol>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <h2 class="text-2xl font-bold text-primary-900 mb-6 font-poppins flex items-center gap-3"><span class="inline-flex items-center justify-center w-8 h-8 bg-accent-teal text-white rounded-full text-sm font-bold">2</span>Install the Software</h2>
    <ol class="space-y-3 text-gray-700">
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <p>Open the downloaded file.</p>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <p>Run the installer.</p>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <p>Wait for installation to complete.</p>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <p>Local WP will now be installed on your PC.</p>
      </li>
    </ol>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <h2 class="text-2xl font-bold text-primary-900 mb-6 font-poppins flex items-center gap-3"><span class="inline-flex items-center justify-center w-8 h-8 bg-accent-teal text-white rounded-full text-sm font-bold">3</span>Create a New WordPress Site</h2>
    <ol class="space-y-6 text-gray-700">
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Open the Local app.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\8.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Click the <strong class="text-primary-900 font-semibold">+ icon</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\9.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Select <strong class="text-primary-900 font-semibold">Create a New Site</strong> → Continue.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\10.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Enter your site name.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\11.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Select <strong class="text-primary-900 font-semibold">Preferred Environment</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\12.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
    </ol>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <h2 class="text-2xl font-bold text-primary-900 mb-6 font-poppins flex items-center gap-3"><span class="inline-flex items-center justify-center w-8 h-8 bg-accent-teal text-white rounded-full text-sm font-bold">4</span>Setup WordPress Login</h2>
    <ol class="space-y-6 text-gray-700">
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <p>Create a username and password.</p>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Enter your Gmail ID.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\13.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Click <strong class="text-primary-900 font-semibold">Add Site</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\14.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <p>Wait for setup to finish.</p>
      </li>
    </ol>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <h2 class="text-2xl font-bold text-primary-900 mb-6 font-poppins flex items-center gap-3"><span class="inline-flex items-center justify-center w-8 h-8 bg-accent-teal text-white rounded-full text-sm font-bold">5</span>Open WordPress Dashboard</h2>
    <ol class="space-y-6 text-gray-700">
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Click <strong class="text-primary-900 font-semibold">WP Admin</strong>.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\14.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Enter the Username & password you have set in it & click on Log In Button.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\15.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>You will now see the WordPress dashboard.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\16.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
      <li class="flex gap-3">
        <span class="text-accent-teal font-bold min-w-fit">•</span>
        <div>
          <p>Click <strong class="text-primary-900 font-semibold">Hello World → Visit Site</strong> to preview your website.</p>
          <br>
          <img 
            src="\\images\\wordpressinstall\\17.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
        </div>
      </li>
    </ol>
  </div>

  <div class="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-accent-teal rounded-lg p-8 font-poppins">
    <h2 class="text-2xl font-bold text-primary-900 mb-6">✅ Final Result</h2>
    <img 
      src="\\images\\wordpressinstall\\18.jpeg" 
      alt="Search Local WP in browser" 
      class="w-full rounded-lg shadow-md border border-gray-200"
    >
  </div>

</div>  
`,
  },
  {
    id: 2,
    title: 'Complete Guide to Installing Umbraco CMS',
    excerpt: 'Learn how to install and configure Umbraco CMS from scratch. This comprehensive guide covers system requirements, installation steps, and initial setup.',
    slug: 'installing-umbraco-cms',
    date: 'January 18, 2026',
    author: 'Ved Hingu',
    category: 'Umbraco',
    readTime: 10,
    image: `<img 
            src="\\images\\umbracoblogs\\image.jpeg" 
            alt="Search Local WP in browser" 
           className="w-full rounded-lg shadow-md border border-gray-200"
          ></img>`
          ,
    content: `
    
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Umbraco 13 Installation Guide</title>

<style>
    body {
        font-family: "Segoe UI", sans-serif;
        background: #ffffff;
        padding: 40px;
        color: #1f2937;
    }

    /* COMMON WIDTH */
    .container {
        max-width: 950px;
        margin-bottom: 40px;
    }

    /* INTRO STYLE (same as image) */
    .intro-box {
        background: linear-gradient(90deg, #f0fbff, #f4fffb);
        border-left: 6px solid #20b2aa;
        padding: 30px;
        border-radius: 14px;
    }

    .intro-title {
        font-size: 28px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #0f172a;
        margin-bottom: 15px;
    }

    .intro-box p {
        font-size: 18px;
        line-height: 1.7;
        color: #374151;
    }

    /* STEP BOX */
    .step-box {
        background: #ffffff;
        border-radius: 16px;
        padding: 30px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        margin-bottom: 35px;
    }

    .step-title {
        font-size: 26px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 15px;
        color: #0f172a;
        margin-bottom: 20px;
    }

    .step-number {
        width: 42px;
        height: 42px;
        background: #20b2aa;
        color: #ffffff;
        font-weight: 700;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }

    /* 🔥 BULLET FIX (IMPORTANT) */
    .step-box ul {
        list-style-type: disc !important;
        list-style-position: inside;
        padding-left: 0;
        margin-left: 0;
        font-size: 18px;
        color: #374151;
    }

    .step-box ul li {
        display: list-item !important;
        margin-bottom: 12px;
    }

    /* BULLET COLOR */
    .step-box ul li::marker {
        color: #20b2aa;
        font-size: 18px;
    }

</style>
</head>

<body>

<div class="container">

    <!-- INTRODUCTION -->
    <div class="intro-box">
        <div class="intro-title">🚀 Introduction</div>
        <p>
            Umbraco is an open-source Content Management System (CMS) built on the
            Microsoft .NET platform. It is widely used for creating modern, secure,
            and high-performance websites and web applications.
        </p>
        <p>
            Umbraco provides flexibility, scalability, and a clean back office that
            allows content editors to manage pages and media easily without technical
            knowledge.
        </p>
    </div>

</div>

<div class="container">

    <!-- STEP 1 -->
    <div class="step-box">
        <div class="step-title">
            <div class="step-number">1</div>
            System Requirements
        </div>
        <ul>
            <li>Windows 10 or Windows 11</li>
            <li>.NET SDK 8.0</li>
            <li>Visual Studio 2022</li>
            <li>SQL Server</li>
        </ul>
    </div>

    <!-- STEP 2 -->
    <div class="step-box">
        <div class="step-title">
            <div class="step-number">2</div>
            Install .NET 8 SDK
        </div>
        <ul>
            <li>Open your browser and search for <strong>.NET download</strong></li>
            <li>Download and install <strong>.NET 8 SDK</strong> from Microsoft</li>
            <li>Verify installation using Command Prompt
            <img 
            src="\\img\\umbracoblogs\\1.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        </ul>
    </div>

    <!-- STEP 3 -->
    <div class="step-box">
        <div class="step-title">
            <div class="step-number">3</div>
            Create Umbraco Project
        </div>
        <ul>
            <li>Open Command Prompt</li>
            <li>Navigate to your desired folder
            <img 
            src="\\images\\umbracoblogs\\2.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
            <li>Run the Umbraco installation command
            <img 
            src="\\images\\umbracoblogs\\3.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
          <li>Create a new Project of Umbraco
          <img 
            src="\\images\\umbracoblogs\\4.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        </ul>
    </div>

    <!-- STEP 4 -->
    <div class="step-box">
        <div class="step-title">
            <div class="step-number">4</div>
            Run & Setup Umbraco
        </div>
        <ul>
            <li>Go to the project folder
            <img 
            src="\\images\\umbracoblogs\\5.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
            <li>Run the project using dotnet run
            <img 
            src="\\images\\umbracoblogs\\6.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          >
            <img 
            src="\\images\\umbracoblogs\\7.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
            <li>Then "ctrl+click"on These two URLs
            <img 
            src="\\images\\umbracoblogs\\8.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
            <li>Complete setup and log in to the Umbraco back office</li>
        </ul>
    </div>
    <!-- STEP 5 -->
    <div class="step-box">
       <div class="step-title">
         <div class="step-number">5</div>
        Login & Explore Umbraco Dashboard
    </div>

    <ul>
        <li>Then a page will open in your browser where you need to enter your name, email, and password.
        <img 
            src="\\images\\umbracoblogs\\9.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        <li>Click the checkbox and then click the Next button.<img 
            src="\\images\\umbracoblogs\\10.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        <li>Click Next again.<img 
            src="\\images\\umbracoblogs\\11.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        <li>Select the database and click the Install button.<img 
            src="\\images\\umbracoblogs\\12.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        <li>After the installation is complete, enter the email ID and password you saved earlier and click the Login button.<img 
            src="\\images\\umbracoblogs\\13.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        <li>The page that opens next is the first dashboard view of Umbraco CMS.
        <img 
            src="\\images\\umbracoblogs\\14.jpeg" 
            alt="Search Local WP in browser" 
            class="w-full rounded-lg shadow-md border border-gray-200"
          ></li>
        <li><strong>Umbraco CMS has now been successfully installed on your PC.</strong></li>
    </ul>
    </div>

</div>

</body>
</html>
    `,
  },
   {
    id: 3,
    title: 'How to Install and Customize a WordPress Theme Using Local WP',
    excerpt: 'Boost your WordPress site performance with proven optimization techniques. Learn caching, image optimization, and database tuning.',
    slug: 'wordpress-theme-installation-localwp',
    date: 'December 15, 2025',
    author: 'Ved Hingu',
    category: 'WordPress',
    readTime: 6,
    image: `<img 
            src="\\images\\wordpressinstall\\theme.jpeg" 
            alt="Search Local WP in browser" 
           className="w-full rounded-lg shadow-md border border-gray-200"
          ></img>`,
    content: `


  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>WordPress Theme Installation – Local WP</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:"Segoe UI", Arial, sans-serif;
  background:#f4f6fb;
  color:#222;
  line-height:1.7;
}

a{ text-decoration:none; color:inherit; }

/* ===== HERO ===== */
.hero{
  background:#fff;
  padding:60px 20px 40px;
  text-align:center;
  box-shadow:0 2px 6px rgba(0,0,0,0.05);
}

.hero h1{
  font-size:36px;
  margin-bottom:18px;
  color:#0a1f44;
}

/* ===== FULL WIDTH LAYOUT ===== */
.container{
  width:100%;
  margin:0;
  display:grid;
  grid-template-columns:1fr;
  gap:30px;
  padding:30px;
}

/* ===== ARTICLE (FULL WIDTH) ===== */
article{
  background:#fff;
  padding:35px;
  border-radius:12px;
  box-shadow:0 5px 15px rgba(0,0,0,0.06);
}

/* ===== HEADINGS ===== */
article h2{
  margin:30px 0 10px;
  color:#123b7a;
  font-size:22px;
  display:flex;
  align-items:center;
  gap:10px;
}

/* ===== STEP BOX ===== */
.step{
  background:linear-gradient(90deg,#f0fbff,#f4fffb);
  padding:18px 22px;
  border-left:6px solid #20b2aa;
  margin:15px 0 25px;
  border-radius:10px;
  font-size:16px;
}

/* ===== BULLETS ===== */
.step ul{
  list-style:disc;
  list-style-position:inside;
  margin-top:10px;
}

.step ul li{
  margin-bottom:8px;
}

.step ul li::marker{
  color:#20b2aa;
}

/* ===== IMAGES (FULL WIDTH) ===== */
article img{
  width:100%;
  max-width:100%;
  margin:15px 0 30px;
  border-radius:10px;
  box-shadow:0 6px 18px rgba(0,0,0,0.08);
}

/* ===== RESPONSIVE ===== */
@media(max-width:768px){
  article{
    padding:20px;
  }
}
</style>
</head>

<body>

<div class="container">

<article>

<h2>🚀 Introduction</h2>
<div class="step">
  Working on WordPress locally is the safest and fastest way to design your website
  before making it live. In this guide, you’ll learn how to install a theme and
  personalize it step-by-step using the Local WP tool.
</div>

<h2>Step 1: Launch the Local WP Application</h2>
<div class="step">
  Start by opening the Local WP software on your computer. From the dashboard,
  select the website project you want to edit.
</div>
<img src="\\images\\wordpressinstall\\20.jpeg" alt="Search Local WP">

<h2>Step 2: Access the WordPress Dashboard</h2>
<div class="step">
  Click the <strong>WP Admin</strong> button. This will redirect you to your
  WordPress login page.
</div>
<img src="\\images\\wordpressinstall\\21.jpeg" alt="WP Admin">

<h2>Step 3: Log in to Your Site</h2>
<div class="step">
  Enter your admin username and password to open the WordPress dashboard where
  all settings and tools are available.
</div>
<img src="\\images\\wordpressinstall\\22.jpeg" alt="WordPress Login">

<h2>Step 4: Navigate to Themes</h2>
<div class="step">
  From the left menu, go to <strong>Appearance → Themes</strong>.
  Here you can manage, add, or change your website’s design.
</div>
<img src="\\images\\wordpressinstall\\24.jpeg" alt="Themes">

<h2>Step 5: Add a New Theme</h2>
<div class="step">
  Click <strong>Add New</strong>, browse the available themes, and choose the one
  that fits your style or project requirements.
</div>
<img src="\\images\\wordpressinstall\\25.jpeg" alt="Add Theme">

<h2>Step 6: Install and Activate</h2>
<div class="step">
  Press the <strong>Install</strong> button and once completed,
  click <strong>Activate</strong> to apply the theme to your website.
</div>
<img src="\\images\\wordpressinstall\\27.jpeg" alt="Install Theme">
<img src="\\images\\wordpressinstall\\28.jpeg" alt="Activate Theme">
<h2>Step 7: Customize Your Design</h2>
<div class="step">
  Open the site preview and use <strong>Edit Site</strong> or <strong>Customize</strong>
  to change layouts, colors, fonts, and sections according to your needs.
</div>
<img src="\\images\\wordpressinstall\\30.jpeg" alt="Customize">
<img src="\\images\\wordpressinstall\\31.jpeg" alt="Edit Site">

</article>

</div>

</body>
</html>`,
     },
];


const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-primary-900 mb-4">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="text-accent-teal font-semibold hover:underline font-inter"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPostsData
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="pt-20">
      <Helmet>
        <title>{post.title} - Swastikbytes</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, CMS, web development`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <link rel="canonical" href={`https://www.swastikbytes.com/blog/${post.slug}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent-teal font-semibold mb-8 hover:gap-3 transition-all duration-300 font-inter"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="bg-accent-teal text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {post.category}
            </span>
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary-900 mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-gray-600 font-inter">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-accent-teal" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent-teal" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent-teal" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      dangerouslySetInnerHTML={{ __html: post.image }}>
        {/* <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-2xl"
        ></img> */}
        
      </section>
      {/* Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none font-inter text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <span className="font-poppins font-semibold text-gray-700">Share on Social Media:</span>
              <div className="flex gap-3">
                {/* Facebook Share Button */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://www.swastikbytes.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300 flex items-center justify-center group"
                  title="Share on Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X (Twitter) Share Button */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(
                    `https://www.swastikbytes.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-900 text-white p-3 rounded-full transition-colors duration-300 flex items-center justify-center group"
                  title="Share on X"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.904 6.75h-3.315l7.73-8.835L.428 2.25h6.771l4.67 6.178 5.375-6.178zM17.534 20.574h1.832L6.455 3.975H4.556l13.978 16.599z" />
                  </svg>
                </a>

                {/* LinkedIn Share Button */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://www.swastikbytes.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors duration-300 flex items-center justify-center group"
                  title="Share on LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>

                {/* Copy Link Button */}
                <button
                  onClick={() => {
                    const url = `https://www.swastikbytes.com/blog/${post.slug}`;
                    navigator.clipboard.writeText(url);
                    alert('Blog link copied to clipboard!');
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300 flex items-center justify-center group"
                  title="Copy link"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-poppins font-bold text-3xl text-primary-900 mb-12">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden bg-gray-200" dangerouslySetInnerHTML={{ __html: relatedPost.image }}>
                    {/* <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    /> */}
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins font-bold text-lg text-primary-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
