import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIGYF0jr4lT-xMrIXF_rmIE0MHQd1SLHE",
    authDomain: "bblog-9e0c9.firebaseapp.com",
    projectId: "bblog-9e0c9",
    storageBucket: "bblog-9e0c9.appspot.com",
    messagingSenderId: "806420786325",
    appId: "1:806420786325:web:207aae6c69ecb8aa3abf9c"
}

export default class Fire {
    constructor(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null);
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        })
    }

    get ref() {
        return firebase.firestore().collection("articles");
    }

    getArticles(callback) {
        let ref = this.ref.orderBy("created_at");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let articles = [];
            snapshot.forEach(doc => {
                articles.push({ id: doc.id, ...doc.data() });
            });
            callback(articles.reverse());
        }, function(error) {
            callback(error);
        });
    }

    addArticle(article) {
        this.ref.add(article);
    }

    deleteArticle(article) {
        this.ref.doc(article.id).delete();
    }

    updateArticle(article) {
        this.ref.doc(article.id).update(article);
    }
}