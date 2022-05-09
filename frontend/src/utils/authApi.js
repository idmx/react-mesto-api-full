class AuthApi {
  constructor( options ) {
    this.options = options;
  }

  _getResponseData( res ) {
    if ( res.ok ) {
      return res.json();
    }
    return Promise.reject( res.status ); 
  }

  signUp( email, password ) {
    return fetch( `${ this.options.baseUrl }/signup`, {
      method: "POST",
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({
          password,
          email,
      })
    })
      .then( res => {
        return this._getResponseData( res )
      })
  }

  signIn( email, password ) {
    return fetch( `${ this.options.baseUrl }/signin`, {
      method: "POST",
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({
          password,
          email,
      })
    })
      .then( res => {
        return this._getResponseData( res )
      })
  }

  signOut() {
    return fetch( `${ this.options.baseUrl }/signout`, {
      headers: this.options.headers,
      credentials: 'include',
    })
      .then( res => {
        return this._getResponseData( res )
      })
  }
}
  const authApi = new AuthApi({
    baseUrl: 'https://api.my-mesto.nomoredomains.xyz',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  });
  
  export default authApi