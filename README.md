# 🏡 EstateVal: AI-Powered California Property Value Estimator 🚀

[![Python Version](https://img.shields.io/badge/Python-3.9%2B-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![Django Version](https://img.shields.io/badge/Django-5.0%2B-092E20?logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.0%2B-F7931E?logo=scikit-learn&logoColor=white)](https://scikit-learn.org/stable/)
[![Bootstrap Version](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](https://opensource.org/licenses/MIT) Welcome to **EstateVal**! Step into the future of property valuation with our intelligent web application, designed to provide insightful estimates for California properties. By harnessing the power of machine learning and a robust Django backend, EstateVal offers a seamless user experience for exploring potential property values.

This project was developed by **Shishir Ganesh Shetty** as part of an internship, demonstrating a comprehensive application of modern web development and machine learning techniques.

**Live Demo:** `[Link to Live Demo - Coming Soon! Add your link here if deployed]`

---

## ✨ Core Features

* **Interactive Predictions:** A sleek, user-friendly interface to input property features.
* **AI-Driven Insights:** Employs a Random Forest Regressor model, trained on the California Housing dataset, for value estimations.
* **Dynamic Feedback:** Instantly view predictions on the page without annoying reloads, thanks to asynchronous JavaScript.
* **Responsive Design:** Looks and works great on desktops, tablets, and mobile devices.
* **Trainable Model:** Comes with a Jupyter Notebook allowing you to explore the data and train the prediction model from scratch!

---

## 🛠️ Technology Stack

EstateVal is built with a powerful combination of modern technologies:

* **Backend:**
    * ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
    * ![Django](https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white) (Web Framework)
* **Machine Learning:**
    * ![Scikit-learn](https://img.shields.io/badge/-Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white) (ML Models, Preprocessing, Metrics)
    * ![Pandas](https://img.shields.io/badge/-Pandas-150458?style=flat-square&logo=pandas&logoColor=white) (Data Manipulation)
    * ![NumPy](https://img.shields.io/badge/-NumPy-013243?style=flat-square&logo=numpy&logoColor=white) (Numerical Computing)
    * `Joblib` (Saving/Loading ML Artifacts)
* **Frontend:**
    * HTML5
    * CSS3 (Custom Styling + Bootstrap 5.3 for layout and components)
    * JavaScript (ES6+ for client-side logic and AJAX)
* **Development & Tools:**
    * Jupyter Notebook (For ML experimentation)
    * Visual Studio Code (Recommended Editor)
* **Version Control:**
    * Git
    * GitHub

---

## 📂 Project Structure Simplified

```
django-house-price-predictor/  (Your project root)
├── housepredictor_project/    # Django project configurations
├── predictor/                 # Main Django app
│   ├── static/predictor/      # CSS & JS files
│   ├── templates/predictor/   # HTML templates (index.html)
│   ├── views.py               # Backend logic, prediction endpoint
│   └── ...
├── saved_models/              # User-generated models will be saved here
│   └── .gitkeep               # (Ensures Git tracks the directory)
├── dataset/
│   └── housing.csv            # California Housing dataset for training
├── venv/                      # Virtual environment (ignored by Git)
├── manage.py                  # Django's command-line utility
├── requirements.txt           # Python dependencies
├── california_housing_ml_model.ipynb # Notebook to train your model
└── README.md
```

---

## 🚀 Getting Started Locally

Follow these instructions to set up and run EstateVal on your local machine.

### 1. Prerequisites

* Python 3.9 or newer
* Git command-line tools

### 2. Clone the Repository

```bash
git clone [https://github.com/LostSamuraii/django-house-price-predictor.git](https://github.com/LostSamuraii/django-house-price-predictor.git)
cd django-house-price-predictor
```

### 3. Set Up Virtual Environment & Install Dependencies

```bash
# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate

# Install required packages
pip install -r requirements.txt
```

### 4. ‼️ Train Your Machine Learning Model (Crucial Step!) ‼️

This project requires **you to train the machine learning model** using the provided Jupyter Notebook. The trained model artifacts (`.joblib` files) are not included in this repository.

**Instructions:**

1.  **Ensure you have Jupyter Notebook or JupyterLab installed.** If not, in your activated virtual environment:
    ```bash
    pip install jupyterlab notebook
    ```
2.  **Launch Jupyter Notebook/Lab:**
    ```bash
    jupyter lab 
    # OR
    # jupyter notebook
    ```
3.  **Open and Run the Notebook:**
    * Navigate to and open the `california_housing_ml_model.ipynb` notebook.
    * **Run all the cells in the notebook from top to bottom.** This notebook will:
        * Load the `dataset/housing.csv` data.
        * Perform data exploration and visualization.
        * Preprocess the data (handle missing values, feature engineer, one-hot encode, scale features).
        * Train a Linear Regression and a Random Forest Regressor model.
        * Evaluate the models.
        * **Crucially, the final cells of the notebook (Step 1.7) will save three files into a `saved_models/` directory in your project root:**
            * `california_housing_model_rf.joblib` (the trained Random Forest model)
            * `california_model_feature_columns.joblib` (the list of feature names the model expects)
            * `california_housing_scaler.joblib` (the fitted StandardScaler object)

    ✅ **These three `.joblib` files MUST be generated and present in `saved_models/` for the web application to function correctly.** The Django backend (`views.py`) is configured to load these specific files at startup.

### 5. Apply Django Database Migrations

```bash
python manage.py migrate
```
(This sets up the initial database, typically SQLite for development.)

### 6. Run the Django Development Server

```bash
python manage.py runserver
```
🎉 Your EstateVal application should now be running at `http://127.0.0.1:8000/`!

---

## 💡 How to Use EstateVal

1.  Navigate to `http://127.0.0.1:8000/`.
2.  The intuitive interface will prompt you for property and district details:
    * Longitude and Latitude
    * Housing Median Age
    * Total Rooms & Bedrooms (for the local block)
    * Population & Households (for the local block)
    * Median Income (in tens of thousands USD, e.g., `3.5` represents $35,000)
    * Ocean Proximity category
3.  Click the **"Estimate Value"** button.
4.  The AI will process your input, and the estimated median house value for a district with those characteristics will appear dynamically!

---

## 🔬 The Machine Learning Heartbeat

A brief look into the ML pipeline performed by `california_housing_ml_model.ipynb`:

1.  **Data Discovery:** Loading and initial statistical exploration of the California Housing dataset.
2.  **Visual Insights (EDA):** Plotting distributions and correlations to understand feature behaviors (e.g., `median_income`'s strong impact, price capping near $500k).
3.  **Data Transformation (Preprocessing):**
    * *Handling Missing Data:* Imputing missing `total_bedrooms` with the median.
    * *Feature Crafting:* Engineering new insightful features like `rooms_per_household`.
    * *Categorical Conversion:* Using One-Hot Encoding for `ocean_proximity`.
    * *Normalization:* Scaling numerical features with `StandardScaler` for optimal model performance.
4.  **Model Creation & Showdown:**
    * Splitting data into training (80%) and testing (20%) sets.
    * Training a baseline Linear Regression model.
    * Training a more robust Random Forest Regressor (achieving ~81% R² on test data).
5.  **Persistence:** Saving the best model (Random Forest), its expected feature order, and the scaler using `joblib` for the Django app.

---

## 🔮 Future Vision & Enhancements

While EstateVal is fully functional, here are some ideas for future development:

* **Advanced Model Tuning:** Fine-tune the Random Forest with GridSearchCV/RandomizedSearchCV.
* **Richer Features:** Incorporate more diverse features or geospatial analysis.
* **User Personalization:** Add user accounts to save prediction history.
* **Database Integration:** Store prediction inputs and outputs, or even property listings.
* **Interactive Maps:** Visualize predictions or input locations using map APIs.
* **Cloud Deployment:** Take EstateVal live on platforms like Heroku, AWS, or PythonAnywhere!
* **Containerize:** Package with Docker for universal deployment.
* **CI/CD:** Implement a Continuous Integration/Continuous Deployment pipeline.
* **Alternative Models:** Experiment with other regression models like Gradient Boosting (XGBoost, LightGBM) or simple Neural Networks.

---

## 🤝 Contributing

This project was developed by Shishir Ganesh Shetty for an internship. While direct contributions might be limited, feel free to fork the repository, explore the code, and adapt it for your own learning projects! If you find any bugs or have suggestions, opening an issue is appreciated.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

* The providers of the California Housing Prices dataset.
* The vibrant open-source communities behind Python, Django, Scikit-learn, Pandas, and Bootstrap.


---

This project, developed by **Shishir Ganesh Shetty**, aims to showcase the powerful synergy between machine learning and web development. Enjoy exploring and predicting!
```
