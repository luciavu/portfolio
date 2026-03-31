import './DataSci.scss';
const Contact = () => {
  return (
    <section id="datascience" className="datasci">
      <div className="heading">
        <h1 className="id">04</h1>
        <h1 className="name">Data Science Projects</h1>
      </div>

      <p>Below are a few snippets from my favourite data science projects:</p>
      <div className="dataproject">
        <div className="title">01. Drosophila (fruit flies!)</div>
        <div className="description">
          A data analysis project on different drosophila group features and characteristics.
        </div>

        <div className="snippets">
          <img
            className="long"
            src="./images/data-project/project1/drosophila1.png"
            alt="Drosophila Project"
          ></img>
          <img src="./images/data-project/project1/drosophila2.png" alt="Drosophila Project"></img>
          <img src="./images/data-project/project1/drosophila3.png" alt="Drosophila Project"></img>
        </div>
        <div className="techniques">
          <strong>Techniques used:</strong> data pre-processing and visualisation, statistical
          analysis, k-NN classifictation, random forest classification, logistic regression models,
          multi-layer perceptron classification
        </div>
      </div>

      <div className="dataproject">
        <div className="title">02. Queensland Labor Force Data</div>
        <div className="description">
          A data analysis project examining Queensland labour force data and relevant side data on
          inflation and interest rates, to make predictions of its future movements using timeseries
          forecasting techniques.
        </div>
        <div className="snippets">
          {' '}
          <img
            className="long"
            src="./images/data-project/project2/labour1.png"
            alt="Queensland Labor Force Data Project"
          ></img>
          <img
            className="longer"
            src="./images/data-project/project2/labour2.png"
            alt="Queensland Labor Force Data Project"
          ></img>
        </div>
        <div className="techniques">
          <strong>Techniques used:</strong> exploratory data analysis, STR decomposition, ARIMA
          timeseries models, neural-network-based forecasting methods
        </div>
      </div>
      <div className="dataproject">
        <div className="title">03. BBC News</div>
        <div className="description">
          A data project to gain practical experience in analyzing unstructured data, featuring
          articles published on the BBC News website.
        </div>
        <div className="snippets">
          {' '}
          <img
            className="long"
            src="./images/data-project/project3/bbc1.png"
            alt="BBC News Project"
          ></img>
          <img
            className="longer"
            src="./images/data-project/project3/bbc2.png"
            alt="BBC News Project"
          ></img>
        </div>
        <div className="techniques">
          <strong>Techniques used:</strong> exploratory data analysis, data pre-processing, logistic
          regression models, model evaluation techniques
        </div>
      </div>
      <p>
        **As this is code I developed for university projects, please contact me for the full code.
      </p>
    </section>
  );
};

export default Contact;
