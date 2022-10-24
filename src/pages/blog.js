import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
	console.log(data)
	
	return (
		<Layout pageTitle='My Blog Posts'>
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>{node.frontmatter.title}</h2>
					<p>Posted: {node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
				</article>
			))}
		</Layout>
	)
}

export const query = graphql`
	query GetBlogsContent {
		allMdx(sort: {fields: frontmatter___date, order: DESC}) {
			nodes {
			  frontmatter {
				date(formatString: "MMMM D, YYYY")
				title
			  }
			  id
			  excerpt
			  parent {
				... on File {
				  modifiedTime(formatString: "MMMM D, YYYY")
				}
			  }
			}
		  }
	}
`

export const Head = () => <Seo title='My Blog Posts' />

export default BlogPage
