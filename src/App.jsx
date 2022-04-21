import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import AddButton from './components/AddButton';
import ArticleModal from './components/ArticleModal';
import { Layout, Menu, Spin} from 'antd';
import ArticleCard from './components/ArticleCard';
import Fire from './Fire';
import ArticleViewMoreModal from './components/ArticleViewMoreModal';
import SortButton from './components/SortButton';
const { Header, Content, Footer } = Layout;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isArticleModalVisible: false,
      isViewMoreModalVisible: false,
      articles: [],
      loading: true,
      error: null,
      selectArticle: {},
      order: "asc",
      theme: "dark"
    }
  }

  componentDidMount() {
    const firebase = new Fire(error => {
      if (error) {
        this.setState({
          error: error
        });
      } else {
        firebase.getArticles(articles => {
          this.setState({
            articles: articles,
            loading: false
          });
        }, this.state.order);
      }
    });
  }

  //methode permettant de Trier les articles
  sortArticle = (order) => {
    this.setState({ order: order });
    let articlesClone = this.state.articles
    if (order === "asc") {
      articlesClone.sort(function (article1, article2) {
        if (article1.created_at > article2.created_at) return -1;
        if (article1.created_at < article2.created_at) return 1;
        return 0;
      })
    } else if (order === "desc") {
      articlesClone.sort(function (article1, article2) {
        if (article1.created_at < article2.created_at) return -1;
        if (article1.created_at > article2.created_at) return 1;
        return 0;
      })
    }
  }

  render() {
    return (
      <Layout className="layout">

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme={this.state.theme} mode="horizontal">
            <Menu.Item key="logo" disabled>
              <img src={logo} className="App-img-logo" alt="logo" />
            </Menu.Item>
            <Menu.Item key="Rediger un article">
              <AddButton
                content="Rédiger un article"
                size="large"
                title="Ce Bouton permet d'ajouter un article"
                handleclick={() => this.setState({ isArticleModalVisible: true })}
              />
            </Menu.Item>
            <Menu.Item key="Trier les article">
              <SortButton
                content="Trie des articles"
                size="large"
                title="Ce Bouton permet de Trier les articles par date"
                handleSortAsc={() => this.sortArticle("asc")}
                handleSortDesc={() => this.sortArticle("desc")}
              />
            </Menu.Item>
          </Menu>

        </Header>

        <Content style={{ padding: '50px', marginTop: '50px' }}>
          <div className="site-layout-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {this.state.isArticleModalVisible &&
              <ArticleModal
                titre="Rédiger un article"
                visible={this.state.isArticleModalVisible}
                handleOk={() => this.setState({ isArticleModalVisible: false, selectArticle: {} })}
                handleCancel={() => this.setState({ isArticleModalVisible: false, selectArticle: {} })}
                article={this.state.selectArticle}
              />
            }
            {this.state.isViewMoreModalVisible &&
              <ArticleViewMoreModal
                titre={this.state.selectArticle.title}
                article={this.state.selectArticle}
                visible={this.state.isViewMoreModalVisible}
                handleReturn={() => this.setState({ isViewMoreModalVisible: false, selectArticle: {} })}
              />
            }
            {this.state.loading === true && (<Spin size="large" />)}
            {this.state.errorerror !== null && <p style={{ color: 'red' }}>{this.state.errorerror}</p>}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {this.state.articles.map(article => (<ArticleCard key={article.id} article={article} handleclickModif={() => this.setState({ isArticleModalVisible: true, selectArticle: article })} handleclickViewMore={() => this.setState({ isViewMoreModalVisible: true, selectArticle: article })} />))}
            </div>
          </div >
        </Content>

        <Footer style={{ textAlign: 'center', position: 'bottom' }}> ©2022 Created by Guillaume Blanchefort</Footer>

      </Layout>
    );
  }
}
