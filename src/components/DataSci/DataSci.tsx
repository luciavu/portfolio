import './DataSci.scss';
const Contact = () => {
  return (
    <section id="datasci" className="datasci">
      <div className="heading">
        <h1 className="id">04</h1>
        <h1 className="name">Data Science Projects</h1>
      </div>

      <p>
        One of my main interests in learning is data science, statistics and analysing data as I
        enjoy working with numbers and data.
      </p>
      <p>Below are a few of my favourite data science projects:</p>
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
          analysis, k-NN classifictation, random forest classification, logistic regression,
          multi-layer perceptron classification
        </div>
      </div>
      <div className="dataproject">
        <div className="title">02. Turkish Dry Beans</div>
        <div className="description">
          A data pre-processing and analysis project on the structural and shape features of
          different dry bean varieties used in Turkish agriculture.
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
          analysis, k-NN classifictation, random forest classification, logistic regression,
          multi-layer perceptron classification
        </div>
      </div>
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
          analysis, k-NN classifictation, random forest classification, logistic regression,
          multi-layer perceptron classification
        </div>
      </div>
      <p>
        **As this is code I developed for university projects, please contact me to request the full
        code.
      </p>
    </section>
  );
};

export default Contact;
