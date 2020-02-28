import React from 'react';
import './Articles.sass'

class Articles extends React.Component {
  render() {
    const car = 'https://images.unsplash.com/photo-1581908165193-c5f18552ddbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80';
      return (
        <section className="articles">
            <div className="wrap">
              <div className="articles-body">
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" style={{ backgroundImage: `url(${ car })` }}></div>
                    <h3 className="article__title">HTTPS & SSL Does Not Mean You Have a Secure Website</h3>
                    <p className="article__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
                    <div className="article-tags">
                    </div>
                  </div>
                </article>
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" styles={{ backgroundImage:`url(${car})` }}></div>
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">In this blog post, I share how to use three easily obtainable PPC reports to help improve your organic search performance. </p>
                    <div className="article-tags">
                      <div className="article-tags__tag">advanced</div>
                    </div>
                  </div>
                </article>
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" styles={{ backgroundImage:`url(${car})` }}></div>
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
                    <div className="article-tags">
                      <div className="article-tags__tag">advanced</div>
                    </div>
                  </div>
                </article>
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" styles={{ backgroundImage:`url(${car})` }}></div>
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
                    <div className="article-tags">
                      <div className="article-tags__tag">advanced</div>
                    </div>
                  </div>
                </article>
                <article className="article article_big">
                  <div className="article-container">
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
                  </div>
                </article>
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" styles={{ backgroundImage:`url(${car})` }}></div>
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">In this blog post, I share how to use three easily obtainable PPC reports to help improve your organic search performance. </p>
                    <div className="article-tags">
                      <div className="article-tags__tag">advanced</div>
                    </div>
                  </div>
                </article>
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" styles={{ backgroundImage:`url(${car})` }}></div>
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
                    <div className="article-tags">
                      <div className="article-tags__tag">advanced</div>
                    </div>
                  </div>
                </article>
                <article className="article">
                  <div className="article-container">
                    <div className="article__header" styles={{ backgroundImage:`url(${car})` }}></div>
                    <h3 className="article__title">SEMrush Real-Time Site Analysis of VisionDirect</h3>
                    <p className="article__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
                    <div className="article-tags">
                      <div className="article-tags__tag">advanced</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="pagination">
                <div className="wrap">
                  <div className="pagination__item active">1</div>
                  <div className="pagination__item">2</div>
                  <div className="pagination__item">3</div>
                  <div className="pagination__item">4</div>
                </div>
              </div>
            </div>
        </section>
      );
    }
  }

  export default Articles;