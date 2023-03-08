export default {
    name: 'TheUserComponent',

    props: ['user'],

    template: `
    <section>
        <h1> {{ user.username }}</h1>
        <p> and maybe an avatar or something</p>
        <button @click="navToHomePage">Go Home!</button>
    </section>
    `,

    methods: {
        navToHomePage() {
            console.log('this user has this level:',this.user.permissions);
            // let targetHome = 'home';
            // every user has permissions as part of their data (this is coming from the database)
            // it is  set in teh permissions column / permisssions field
            // we can use that data to figure out what home page they should have access to - it's like a rating
            // if the access is less than 3, then they are probably not an adult and shouldnt see the adult home page
            // if it is GREATER than 3, then they get access to verything because they are an ADULT
            // if (this.user.permissions < 4) {
            //     targetHome = 'kidshome';
            // } else {
            //     targetHome = 'home'
            // }

            // query the condition, short version of above
            let targetHome = (this.user.permissions < 4) ? "kidshome" : "home";
            
            this.$router.push( {name: targetHome });
        }
    }
}