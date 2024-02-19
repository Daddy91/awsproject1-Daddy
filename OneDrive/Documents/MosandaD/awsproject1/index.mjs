export const handler = async (event) => {
    try {
      // Check if event.body exists and is not empty
      if (!event.body) {
        return {
          statusCode: 400,
          headers: {
              'Access-Control-Allow-Origin': '*', 
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 
              'Access-Control-Allow-Headers': 'application/json', 
          },
          body: JSON.stringify({ message: 'Request body is missing' }),
        };
      }
  
      // Extract username and password from the request body
      const { username, password } = JSON.parse(event.body);
  
      // Check if the username and password are valid (you would replace this with your own authentication logic)
      if (username === 'admin' && password === 'admin123') {
        return {
          statusCode: 200,
          headers: {
              'Access-Control-Allow-Origin': '*', 
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 
              'Access-Control-Allow-Headers': 'application/json', 
          },
          body: JSON.stringify({ message: 'Login successful' }),
        };
      } else {
        return {
          statusCode: 401,
          headers: {
              'Access-Control-Allow-Origin': '*', 
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 
              'Access-Control-Allow-Headers': 'application/json', 
          },
          body: JSON.stringify({ message: 'Invalid username or password' }),
        };
      }
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        headers: {
              'Access-Control-Allow-Origin': '*', 
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 
              'Access-Control-Allow-Headers': 'application/json', 
          },
        body: JSON.stringify({ message: 'Internal server error' }),
      };
    }
  };
  
  