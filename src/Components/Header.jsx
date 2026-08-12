import Buttons from "./UI/Buttons";
import { motion } from "motion/react";

// Fon uchun soxta kod qatorlari
const leftCode = [
  "const app = (req, res, next) => {",
  "  const isAuth = req.headers.authorization;",
  "  if (!isAuth) return res.status(401);",
  "};",
  "",
  "const createServer = () => {",
  "  const server = express();",
  "  server.use(cors());",
  "  server.use(express.json());",
  "",
  "  server.get('/health', (req, res) => {",
  "    res.json({ status: 'healthy', timestamp: Date.now() });",
  "  });",
  "",
  "  process.env.PORT = process.env.PORT || 3000;",
  "  return server;",
  "};",
];

const rightCode = [
  "@media (max-width: 768px) {",
  "  .container {",
  "    padding: 2rem;",
  "    display: flex;",
  "    flex-direction: column;",
  "  }",
  "  .grid {",
  "    grid-template-columns: 1fr;",
  "  }",
  "}",
  "",
  "const response = await fetch(`/api/users/${userId}`);",
  "const data = await response.json();",
  "",
  "try {",
  "  const connection = await mongoose.connect(uri, {",
  "    useNewUrlParser: true,",
  "  });",
  "  console.log('DB connected');",
  "} catch (err) {",
  "  console.error(err);",
  "}",
];

function CodeColumn({ lines, align = "left" }) {
  return (
    <pre
      className={`select-none whitespace-pre text-[18px] leading-5 font-mono text-cyan-500/60 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {lines.join("\n")}
    </pre>
  );
}

export default function DeveloperHero() {
  return (
    <div className="relative w-full min-h-screen bg-[#040608] overflow-hidden flex items-center justify-center">
      {/* CODE BACKGROUND */}
      <div className="absolute inset-0 flex justify-between px-6 py-10 opacity-70 pointer-events-none overflow-hidden">
        <div className="hidden sm:block">
          <CodeColumn lines={leftCode} align="left" />
        </div>

        <div className="hidden sm:block">
          <CodeColumn lines={rightCode} align="right" />
        </div>
      </div>

      {/* DARK RADIAL BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(4,6,8,0.95) 0%, rgba(4,6,8,0.75) 45%, rgba(4,6,8,0.3) 100%)",
        }}
      />

      {/* TOP LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          absolute
          top-64
          left-1/2
          -translate-x-1/2
          w-[420px]
          max-w-[80%]
          h-1
          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent
        "
      />

      {/* BOTTOM LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          absolute
          bottom-24
          left-1/2
          -translate-x-1/2
          w-[420px]
          max-w-[80%]
          h-3
          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent
        "
      />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          px-4
          w-full
        "
      >
        {/* FRONT-END */}
        <div className="flex items-center justify-center gap-2 sm:gap-5">
          <h2
            className="
              text-5xl
              sm:text-7xl
              md:text-8xl
              font-bold
              mt-6
              bg-gradient-to-l
              from-cyan-400
              to-white
              bg-clip-text
              text-transparent
            "
          >
            Front-
          </h2>

          <h2
            className="
              text-5xl
              sm:text-7xl
              md:text-8xl
              font-bold
              mt-6
              bg-gradient-to-r
              from-cyan-400
              to-white
              bg-clip-text
              text-transparent
            "
          >
            End
          </h2>
        </div>

        {/* DEVELOPER */}
        <h2
          className="
            text-5xl
            sm:text-7xl
            md:text-8xl
            font-bold
            mt-2
            sm:mt-6
            bg-gradient-to-r
            from-white
            via-cyan-400
            to-white
            bg-clip-text
            text-transparent
            whitespace-nowrap
          "
        >
          Developer
        </h2>

        {/* BOTTOM CONTENT */}
        <div className="mt-5 flex flex-col items-center">
          <span
            className="
              text-[10px]
              sm:text-[12px]
              tracking-[0.15em]
              sm:tracking-[0.2em]
              text-cyan-500/90
            "
          >
            SCROLL TO CONTINUE
          </span>

          <p
            className="
              font-mono
              text-cyan-400/90
              text-sm
              sm:text-xl
              mt-2
              px-2
            "
          >
            {"// Building digital experiences at light speed"}
          </p>

          {/* SCROLL ICON */}
          <div
            className="
              w-6
              h-10
              rounded-full
              border
              border-cyan-400/60
              animate-bounce
              flex
              items-start
              justify-center
              p-1
              mt-2
            "
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          {/* BUTTON */}
          <div className="-mt-3">
            <Buttons>start line</Buttons>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
