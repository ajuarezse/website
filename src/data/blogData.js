const blogData = [
  /* Draft: Unpublished blog post
  {
    id: 3,
    title:
      'From Cloud to Custom Domain: Engineering a Resilient Deployment for "What to Wear"',
    date: "July 22, 2025",
    excerpt:
      "A journey through cloud deployment challenges and engineering solutions for a full-stack application",
    heroImage: "/images/blog/post-3/WTWR.png",
    content: `
    <p>Bringing a full-stack application to life online is a thrilling endeavor, a complex orchestration of code, infrastructure, and configuration. The true test of a developer, however, often lies in navigating the unforeseen challenges that arise post-deployment, particularly when initial solutions hit unexpected roadblocks.</p>

<p>This was precisely the journey I embarked on with "What to Wear" (WTWR), a React-based application I developed during my time at the TripleTen Software Developer program. WTWR is designed to streamline daily dressing decisions by integrating real-time weather data with a user's uploaded clothing collection. Users can securely sign up, sign in, and manage their garments, while the application dynamically filters and suggests appropriate attire based on current conditions. It's a practical application of front-end responsiveness and robust back-end logic.</p>

<h3>Initial Deployment: Leveraging Google Cloud and Facing the Free Tier Frontier</h3>

<p>My initial deployment of WTWR leveraged Google Cloud Platform (GCP). This provided invaluable hands-on experience with cloud infrastructure, demonstrating how to deploy a comprehensive application, manage resources, and ensure it was live and accessible. It was an excellent introduction to the power and scalability of cloud services.</p>

<p>However, a common hurdle soon emerged: the expiration of the free trial. With the trial's end, the services hosting WTWR were suspended, effectively taking the application offline. This presented a clear technical challenge: how to re-establish the application's online presence, ensuring its availability and functionality, without relying on cost-prohibitive proprietary solutions.</p>

<h3>Engineering a Sustainable Solution: Vercel, MongoDB Atlas, and a Custom Domain</h3>

<p>My objective was to find a robust, cost-effective, and independent hosting solution that would provide long-term stability for WTWR. This led me to a deep dive into alternative deployment strategies, ultimately converging on a powerful and flexible new architecture.</p>

<p>I strategically chose Vercel to host both the React front-end and the Express.js back-end. Vercel's intuitive platform and generous free tier made it an ideal candidate for continuous integration and deployment. For the database, I opted for MongoDB Atlas, a cloud-based NoSQL database service, which offered a scalable and secure solution that integrated seamlessly with my back-end.</p>

<p>The migration process involved several key engineering steps:</p>

<ul>
  <li>API Reconfiguration: Adapting the front-end to communicate with the newly deployed back-end on Vercel.</li>
  <li>Database Migration & Integration: Setting up the MongoDB Atlas cluster and ensuring the back-end correctly connected and interacted with the database.</li>
  <li>Environment Variable Management: Securely handling API keys and sensitive information across the new hosting environments.</li>
  <li>Custom Domain Integration: Configuring a custom subdomain through my portfolio website, ensuring a professional and memorable URL for the application.</li>
</ul>

<h3>A Commitment to Problem-Solving and Technical Excellence</h3>

<p>Successfully migrating and re-deploying "What to Wear" wasn't just about changing platforms; it was a comprehensive exercise in problem identification, strategic planning, and meticulous execution. It showcased my ability to adapt to new technical landscapes, optimize for performance and cost, and implement best practices for security and maintainability.</p>

<p>I thrive on these kinds of technical challenges—analyzing a problem, researching effective solutions, and meticulously implementing them to achieve a resilient and functional outcome. If you're tackling a complex software project or need an experienced hand in navigating deployment and infrastructure challenges, I'm eager to connect and contribute. Let's build robust and reliable solutions, together.</p>

<p>Ready to collaborate on your next technical challenge? Reach out to me at <a href="mailto:ajuarez.se@gmail.com">ajuarez.se@gmail.com</a>.</p>

<p>Angel Juarez</p>
`,
    tags: [
      "cloud deployment",
      "full-stack",
      "React",
      "MongoDB",
      "Vercel",
      "technical solution",
      "problem-solving",
    ],
    readTime: "4 min read",
  },
  */
  {
    id: 2,
    title: "The Unexpected Z-Axis",
    date: "June 19, 2025",
    excerpt:
      "A journey to Oakland's Sudo Room reveals surprising connections between web development and 3D printing",
    heroImage: "/images/blog/post-2/Hardware Hack Night ScreenShot.webp",
    content: `
    <p>Stepping beyond the familiar glow of my code editor, I recently embarked on a low-key adventure to a local hackerspace: the Sudo Room in Oakland, California. As a junior software developer navigating the path to my first full-time role, I've been advised to "get out there" and connect with the broader tech ecosystem. I figured exploring a place like this might just offer some fresh perspective, or at the very least, an interesting story.</p>

<p>I hopped on my bike and rode over, making my way into a space that immediately captured my curiosity. It was a fascinating, almost organic collection of electronics: rows of computer towers, the quiet hum of 3D printers, intricate synth consoles, and shelves brimming with every spare part imaginable. There was a library corner, audio/visual gear, and even classic sewing machines. But what truly brought the space to life was the palpable energy of people, from diverse walks of life, deeply engrossed in their own creations and fixes.</p>

<img src="/images/blog/post-2/Synth Station.webp" alt="Intricate synthesizer console at Sudo Room" class="blog-image" />

<p>Almost immediately, someone with a headlamp spotted me and, with a friendly grin, said, "Looks like your first time here!" I happily confirmed, and was then given a warm welcome and a tour. I saw a dedicated individual perfecting their craft on a sewing machine, a group collaborating on what looked like a sophisticated electronic Halloween prop, and even a family with kids engrossed in tinkering with an old laptop. The Sudo Room is clearly a hub for curious minds and hands-on creators.</p>

<img src="/images/blog/post-2/Testing Consoles.webp" alt="Testing consoles and electronic equipment at Sudo Room" class="blog-image" />

<p>The main focus of the evening seemed to be on a handful of donated 3D printers, each in various stages of revival. As my tour guide and I observed, a person working on one of the printers looked up and asked, "What does the Z coordinate do?" My guide initially thought it controlled vertical movement. Suddenly, my mind clicked. I immediately recalled the z-index in CSS, which controls the stacking order (how elements overlap on a screen), and I chimed in, "I think it actually controls forward and backward movement!"</p>

<img src="/images/blog/post-2/3D Printer.webp" alt="3D printer being repaired at Sudo Room" class="blog-image" />

<p>Both my guide and the printer operator paused, then agreed. With a few button presses on the touchscreen, the 3D printer's platform zoomed forward, confirming the hypothesis. It was a small moment, but incredibly satisfying – seeing a concept from my web development world (z-index for layering) find an unexpected, tangible parallel in hardware (the Z-axis for depth). It underscored how the core principles of problem-solving, spatial thinking, and logical progression are universal across different tech disciplines.</p>

<p>The Sudo Room truly impressed me as a space that fosters community, learning, and hands-on innovation. It's a testament to the fact that the tech world is vast and interconnected, and there's always something new to learn, build, or fix, regardless of your primary expertise. I'm already planning to bring some of my own projects there and look forward to connecting with more of the brilliant minds I met.</p>

<p>Are you building something interesting? Do you need a junior software developer who's passionate about learning, loves solving problems, and isn't afraid to explore new tech dimensions?I'd love to hear from you at: <a href="mailto:ajuarez.se@gmail.com">ajuarez.se@gmail.com</a>.</p>

<p>Angel Juarez</p> 
`,
    tags: ["hackerspace", "community", "3D printing", "learning", "networking"],
    readTime: "3 min read",
  },
  {
    id: 1,
    title: "Hello World",
    date: "April 11, 2025",
    excerpt: "My First Blog Entry: A New Chapter",
    content: `
    <p>Hello and welcome to my first blog entry! This has been a long time coming—one of those ideas that’s been bouncing around in my head, and I’ve finally made it happen. Between coding, learning new algorithms, and refining my skills, I’ve now built my own blogging platform.</p>

<p>Writing has always been a personal exercise for me, a way to reflect and document my journey. I’ve kept journals to help untangle the mess of ideas constantly running through my mind. Seeing my thoughts laid out in words helps me organize them, make sense of them. It gives me the opportunity to, in a way, slow down and process the influx of information and events I experience.</p>

<p>At one point, I actually thought writing would be my career. I studied journalism and spent years contributing to school newspapers, from middle school through college. I loved the whole process—getting assignments, researching, conducting interviews, and eventually seeing my byline in print. That experience showed me the power of publishing, how writing can connect with people.</p>

<p>Fast forward to today, and I’m carving out a different path in tech. After completing a software engineering bootcamp, I built this portfolio site to showcase my work. And now, I’ve added a blog. The journalist in me is excited about this—an opportunity to sharpen my writing skills and share my journey.</p>

<p>I have to admit, after spending so much time writing code, it feels a little weird to type “normally” again. But there’s something refreshing about expressing myself beyond syntax and functions. In a way, it brings me closer to what I believe technology should be about—connecting people.</p>

<p>So, here I am, coding, building, and putting myself out there. If you’re reading this, thanks for being part of the journey. This first post is mostly a test run—making sure everything works and getting back into the rhythm of writing. But there’s more to come. Stay tuned!</p>

<p>Angel Juarez</p>
 `,
    tags: ["coding journey", "developer blog", "personal growth", "test run"],
    readTime: "2 min read",
  },
];

export default blogData;
