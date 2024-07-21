"use client";

import React, { useState } from "react";

import { BlogPageItems } from "@/data";
import { NavbarBlog } from "./navbar-blog";

// import { posts } from "main/providers/data/blogPageData";

import page from "./blog-recent.module.scss";
import post from "./blog-post.module.scss";
import Image from "next/image";
import Link from "next/link";

const removeAccents = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

interface Post {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const themes = [...new Set(BlogPageItems.map((post) => post.subtitle))];
  const [visiblePosts, setVisiblePosts] = useState<number>(7);
  const filteredPosts = BlogPageItems.filter(
    (post: any) =>
      removeAccents(post.title).includes(removeAccents(searchQuery)) ||
      removeAccents(post.subtitle).includes(removeAccents(searchQuery))
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <section className={`${page.container} panel`} data-color="white">
      <NavbarBlog
        className={page.navbar_blog}
        themes={themes}
        onSearch={handleSearch}
      />
      <div className={`${page.results_container}`}>
        <h1 className={page.title}>
          {searchQuery ? "Resultados" : "Mais recentes"}
        </h1>
        {filteredPosts.length > 0 ? (
          <>
            <div className={page.posts_container}>
              {filteredPosts.slice(0, visiblePosts).map((post: any) => (
                <BlogPost
                  data-color="white"
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  subtitle={post.subtitle}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
            {filteredPosts.length > visiblePosts && (
              <div className={page.loadMoreButton}>
                <button className={page.btn_load} onClick={loadMorePosts}>
                  <p className={page.text_btn}>Ler mais artigos</p>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={page.noResults_container}>
            <p className={page.noResults}>Tente usar outras palavras...</p>
          </div>
        )}
      </div>
    </section>
  );
};

interface BlogPostProps {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  subtitle,
  date,
  image,
}) => {
  return (
    <div className={`${post.container} panel`} data-color="white">
      <Link
        href={`/blog/${removeAccents(title)}`}
        className={post.article_container}
      >
        <div className={post.article}>
          <Image
            loading="lazy"
            className={post.img}
            src={image}
            alt="Imagem do post"
          />
          <p className={post.subtitle}>{subtitle}</p>
          <h1 className={post.title}>
            <span className={post.span}>{title}</span>
          </h1>
          <p className={post.data}>{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPage;
