import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ news }) {
  return (
    <>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>
              <a className="text-xl font-semibold">{news.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};