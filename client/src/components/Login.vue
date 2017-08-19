<template>

<div id="login">

<form action="login" role="form" method="post" class="pl-5 pt-5 pr-5">

  <v-card class="grey lighten-4 elevation-10" id="login_card">
  	<v-card-text>
  		<v-container fluid>
  		<v-card-title primary-title class="pl-5"> <h3>Login</h3> </v-card-title>
  			<v-layout row>
  				<v-flex xs4>
  					<v-subheader>Email :</v-subheader>	
  				</v-flex>
  				<v-flex xs8>
  					<v-text-field name="email" label="Enter your email" required="required" ></v-text-field>
  				</v-flex>
  			</v-layout>
  			<v-layout row>
  				<v-flex xs4>
  					<v-subheader>Password :</v-subheader>	
  				</v-flex>
  				<v-flex xs8>
  					<v-text-field name="password" label="Enter your password" required="required" ></v-text-field>
  				</v-flex>
  			</v-layout>
  		</v-container>
  	</v-card-text>
  	<v-btn light class="ml-5 mb-4"> Submit </v-btn>
  	
  	<div class="pb-4 ml-5 mt-3">
		Not Registered? <router-link to="/signup">Register here</router-link>
	</div>
  
  </v-card>

</form>

</div>

</template>

<script>
</script>

<style scoped>

#login{
	background-color : gray;
	height: 100%;	
}

#login_card{
	margin-top: 5%;
	margin-left: 15%;
	align-content: center;
	width: 50%;
	min-width: 350px;
}

</style>
