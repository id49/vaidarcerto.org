const data = require('./data.json')
const slug = require('./slug')

const states = {
  "11": "RO",
  "12": "AC",
  "13": "AM",
  "14": "RR",
  "15": "PA",
  "16": "AP",
  "17": "TO",
  "21": "MA",
  "22": "PI",
  "23": "CE",
  "24": "RN",
  "25": "PB",
  "26": "PE",
  "27": "AL",
  "28": "SE",
  "29": "BA",
  "31": "MG",
  "32": "ES",
  "33": "RJ",
  "35": "SP",
  "41": "PR",
  "42": "SC",
  "43": "RS",
  "50": "MS",
  "51": "MT",
  "52": "GO",
  "53": "DF"
}

const newStates = Object
                    .keys(data.states)
                    .map(id => {
                      return {
                        abbr: states[id],
                        slug: slug(data.states[id]),
                        state: data.states[id]
                      }
                    })

const newCities = data.cities
                    .map(city => {
                      return {
                        name: city.name,
                        slug: slug(city.name),
                        state: states[city.state_id]
                      }
                    })

// firebase only allow batches of 500 writes per commit
const cityBatches = []
while(newCities.length > 0){
  cityBatches.push(newCities.splice(0, 500))
}


const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore({ keyFilename: '../../firebase-private.json'})
const importData = async() => {
  for(const cityBatch of cityBatches){
    const batch = firestore.batch()
    cityBatch.forEach(city => {
      batch.create(firestore.collection('cities').doc(), city)
    })
    await batch.commit()
  }
}
// importData()