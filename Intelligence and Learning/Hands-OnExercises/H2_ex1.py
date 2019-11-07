# -*- coding: utf-8 -*-
"""
Created on Thu Nov  7 11:27:24 2019

@author: lukas
"""
import pandas as pd
#import matplotlib as plt
import numpy as np

dataset = pd.read_csv("./Datasets/housing/housing.csv")
print(dataset.head(10))
print(dataset.info())

print(dataset["ocean_proximity"].value_counts())
print(dataset.describe())

#dataset.hist(bins= 100, figsize=(20,15))
#plt.show()

def split_train_test(data, test_ratio):
    # Shuffle niet noodzakelijk indien de dataset geen bepaalde volgorde zou volgen en al willekeurig is opgeslagen
    shuffled = np.random.permutation(len(data))
    test_data_length= int(len(data) * test_ratio)
    # Van 0de data-item tot het data-item voorbij test-ratio % voor de testdata met geshufflede indexen!
    test = shuffled[:test_data_length]
    # Van test-ratio % tot het einde van de dataset als traininsdata bewaren met geshufflede indexen!
    train = shuffled[test_data_length:]
    return data.iloc[train], data.iloc[test]

train_set, test_set = split_train_test(dataset, 0.2)
print(len(train_set))
print(len(test_set))