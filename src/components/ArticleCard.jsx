import { Card } from 'antd'
import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'
import ViewMoreButton from './ViewMoreButton'

const { Meta } = Card;

export default class ArticleCard extends Component {
  truncate(str) {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  }
  render() {
    const {article, handleclickModif,handleclickViewMore} = this.props
    const date = article.created_at.seconds ? article.created_at.toDate().toLocaleDateString() :  article.created_at.toLocaleDateString();
    return (
      <Card
        hoverable
        key={article.id}
        title={article.title}
        style={{ width: 300, margin: 25, textOverflow: "ellipsis" }}
        cover={<img alt="example" src={article.img} />}
        actions={[
          <DeleteButton
            size="large"
            shape="round"
            title="Ce Bouton permet de supprimer un article"
            article={article}
          />,
          <UpdateButton
            content="Rédiger un article"
            size="large"
            shape="round"
            title="Ce Bouton permet de modifier un article"
            article={article}
            handleclick={handleclickModif}
          />,
        ]}
      >
        <p style={{ margin: 2 }}>{this.truncate(article.content)}</p>
        <ViewMoreButton
          size="default"
          title="Ce Bouton permet de voir le contenue de l'article"
          handleclick={handleclickViewMore}
        />
        <br/>
        <Meta description={"Le " + date} />
      </Card>
    )
  }
}
