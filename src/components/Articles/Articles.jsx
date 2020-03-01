import React from 'react';
import './Articles.sass'
import articles from '../../data/articles.json'

class Articles extends React.Component {
  state = {
    articles: articles,
    total: 8,
    pages: this.pages(),
    current: 1
  }
  pages () {
    const length = articles.length;
    const pages = Math.ceil(length / 8);
    return pages;
  }
  content () {
    const all = this.state.articles;
    const max = this.state.total * this.state.current;
    const min = max - this.state.total;
    const articles = [];
    all.forEach((article, index) => {
      if (index < max && index >= min){
        articles.push(article)
      }
    });
    return articles

  }
  changePage (number) {
    this.setState({current: number})
  }
  render () {
    const articles = this.content();
    const pages = this.state.pages;
    let pagination;
    let numbers = [];
    if (pages !== null) {
      for (let i = 1; i <= pages; i++) {
        numbers.push(i);
      }

      pagination = numbers.map(number => {
        let active = this.state.current === number ? 'active' : '';

        return (
          <div className={"pagination__item " + active} key={number} onClick={() => this.changePage(number)}>{number}</div>
        );
      });
    }
    return (
        
        <section className="articles">
            <div className="wrap">
              <div className="articles-body">
          {
            articles.map( article => {
            
            if (!article.big) {
              return (
                <article className="article" key={article.id}>
                  <div className="article-container">
                  <div className="article__header" style={{ backgroundImage: `url(${ article.image })` }}></div>
                  <h3 className="article__title">{ article.title }</h3>
                  <p className="article__text">{ article.text }</p>
                  <div className="article-tags">
                        <div className="article-tags__tag">{ article.tag }</div>
                      </div>
                    </div>
                </article>
              )
            } else {
              return (  
                <article className="article article_big" key={article.id}>
                  <div className="article-container" style={{ backgroundImage: `url(${ article.image })` }}>
                  <div className="article__header"></div>
                  <h3 className="article__title">{ article.title }</h3>
                  <p className="article__text">{ article.text }</p>
                  </div>
                </article>
              )
            }
            })
          }
              </div>
              <div className="pagination">
                <div className="wrap">
                  {
                    pagination
                  }
                </div>
              </div>
            </div>
        </section>
      );
    }
  }

  export default Articles;