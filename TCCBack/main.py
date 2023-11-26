import joblib
import json
from flask import Flask, request
from numpyencoder import NumpyEncoder

app = Flask(__name__)

@app.route("/")
def IA():
    rf_model = joblib.load('balanced_rf_model.joblib')
    args = request.args.to_dict()
    print(args)
    new_instance = [[
        args["age"],
        args["gender"],
        args["smoker"],
        args["cholesterol"],
        args["hypertension"],
        args["diabetes"],
        args["fat"],
        args["psychosocial"],
        args["activity"],
        args["healthy"]
    ]]
    #Idade,Gênero,Tabagismo,Colesterol,Hipertensão,Diabetes,Obesidade,Saúde Mental,Atividade Física,Consumo Fruta/Vegetal

    prediction = rf_model.predict(new_instance)

    probability_estimates = rf_model.predict_proba(new_instance)

    print("Prediction:", prediction)
    print("Probability Estimates:", probability_estimates[0])

    return json.dumps(probability_estimates[0][1],cls=NumpyEncoder)