import { getSession, GetSessionParams } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { db } from "../firebase";

export default function Home ({session, posts}) {
  if (!session) return <Login />
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook2.0</title>
      </Head>

      <Header />
      <main className='flex'>
        <Sidebar />

        <Feed posts={posts}/>
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) { 
  //Get the user
  console.log("getServerSidePropsss");
 

  const session = await getSession(context)
  console.log(session);
  //Get all the posts
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();
  //format as we need
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
