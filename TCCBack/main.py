import joblib
import json
from flask import Flask, request
from numpyencoder import NumpyEncoder

app = Flask(__name__)

@app.route("/")
def IA():
    rf_model = joblib.load('balanced_rf_model.joblib')
    args = request.args.to_dict()
    age_group = 0
    #(1 18 a 24), (2 25 a 29), (3 30 a 34), (4 35 a 39), (5 40 a 44), 
    #(6 45 a 49), (7 50 a 54), (8 55 a 59), (9 60 a 64), (10 65 a 69), 
    #(11 70 a 74), (12 75 a 79), (13 >= 80)
    age_group = min((int(args["age"]) - 17) // 5, 13) if int(args["age"]) > 0 else 0                
    #Idade,Gênero,Tabagismo,Colesterol,Hipertensão,Diabetes,
    #Obesidade,Saúde Mental,Atividade Física,Consumo Fruta/Vegetal
    new_instance = [[
        age_group,
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
    
    prediction = rf_model.predict(new_instance)

    probability_estimates = rf_model.predict_proba(new_instance)

    print("Prediction:", prediction)
    print("Probability Estimates:", probability_estimates[0])

    return json.dumps(probability_estimates[0][1],cls=NumpyEncoder)