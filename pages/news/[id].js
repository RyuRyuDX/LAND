// pages/news/[id].js
import { client } from "../../libs/client";

export default function newsId({ news }) {
  return (
    <main>
      <h1>{news.title}</h1>
      <p>{news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};