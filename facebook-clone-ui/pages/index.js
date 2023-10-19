import Feed from "@/components/Feed"
import Header from "@/components/Header"
import Login from "@/components/Login"
import RightSidebar from "@/components/RightSidebar"
import Sidebar from "@/components/Sidebar"
import { getSession } from "next-auth/react"
import Head from "next/head"

export default function Home({ session }) {
  {/* If there is no session redirect to Login page */}
  if(!session) return <Login />;

  {/* If session is present */}
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook clone"></meta>
      </Head>
      {/* Header Bar */}
      <Header />

      <main className="flex bg-gray-100">
        {/* Left Side Bar */}
        <Sidebar />
        {/* Feed Create Post & Posts */}
        <Feed />
        {/* Right Side Bar */}
        <RightSidebar />
      </main>
    </div>
  )
}

{/* Define server side properties which gets the session from the context and set it
    Return session as a props
*/}
export async function getServerSideProps(context){
   const session = await getSession(context);
   return {
     props: { session },
   };
}