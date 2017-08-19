<template>

<div id="signup">

<form action="signup" role="form" method="post" class="pl-5 mt-5 pr-5 mb-5">

  <v-card class="grey lighten-4 elevation-10" id="signup_card">
  	
  	<v-card-text>
  		<v-container fluid>
  		<v-card-title primary-title class="pl-5"> <h3>Signup</h3> </v-card-title>
  			<v-layout row>
  				<v-flex xs4>
  					<v-subheader>Name :</v-subheader>	
  				</v-flex>
  				<v-flex xs8>
  					<v-text-field name="name" label="Enter your username" required="required" ></v-text-field>
  				</v-flex>
  			</v-layout>
  			
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
  			
  			<v-layout row>
  				<v-flex xs4>
  					<v-subheader>Confirm Password :</v-subheader>	
  				</v-flex>
  				<v-flex xs8>
  					<v-text-field name="confirm_password" label="Re-enter your password" required="required" ></v-text-field>
  				</v-flex>
  			</v-layout>
  		</v-container>
  	</v-card-text>
    <v-btn light class="ml-5 mb-4"> Submit </v-btn>	
  </v-card>

</form>

</div>

</template>

<script>
</script>

<style scoped>

#signup{
	background-color : gray;
	overflow: auto;
}

#signup_card{
	margin-left: 15%;
	align-content: center;
	width: 50%;
	min-width: 350px;
}

</style>
