import Layout from '../components/Layout'
import PostList from '../components/PostList'

import getPosts from '../utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Fermin's Public Markdown Notes</h1>

        <p className="description">
          Estas son algunas de mis notas, hechas publicas. Podes contactarme en {' '}
          <a href="https://ferminrp.com">ferminrp.com</a>
        </p>
        <main>
          <PostList posts={posts} />
        </main>
        <p>
          You can look at the repository for this project{' '}
          <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            here
          </a>
          , and a tutorial on how to build it {` `}
          <a href="https://url.netlify.com/ByVW0bCF8">here</a>.
        </p>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
