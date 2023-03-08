import SingleUser from './TheSingleUserComponent.js';

export default {
    name: 'TheAllUsersComponent',

    template: `
    <section>
        <h1>All Users Should Show Up Here</h1>
        <h2>Who's Using Roku?</h2>

        <section>
            <ul>
                <li v-for="user in users">
                    <user :user="user"></user>>
                </li>
            </ul>
        </section>
    </section>
    `,

    created() {
        // console.log('all users component is mounted');
        // this is where you should do all od your data rerieval
        fetch('/ums/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // push our users into our Vue data object so we cna render a componnet for each user
                this.users = data;
            })

        .catch(error => console.error(error));
    },

    data(){
        return {
            users: []
        }
    },

    components: {
        user: SingleUser
    }
}