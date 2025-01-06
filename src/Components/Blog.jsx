import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 px-4 py-20 mt-12">
      <h2 className="text-4xl font-semibold text-center text-black dark:text-white mb-8 uppercase">Latest Blogs</h2>
      <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

const BlogCard = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-auto shrink-0 overflow-hidden rounded-xl bg-blue-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Blog
        </span>
        <motion.h3
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-3xl font-black leading-[1.2]"
        >
          Blog Title Here
        </motion.h3>
        <p className="text-white/70">
          This is a brief description of the blog post. It summarizes the content of the post to encourage the user to read more.
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4  rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white z-10">
        Read More
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#1e293b"
      />
    </motion.svg>
  );
};

export default Blog;
