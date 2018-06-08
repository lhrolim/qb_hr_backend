module Api
  class ApiController < ActionController::API
    include ExceptionHandler
    include Response
    include Rails::Pagination
    
    before_action :authenticate_api
    
    private

    API_KEY = "WCZZYjnOQFUYfJIN2ShH1iD24UHo58A6TI"

    def authenticate_api
      api_token = request.headers['X-API-TOKEN']
      if api_token
        unless api_token == API_KEY
          return unauthorize
        end
      else
        return unauthorize
      end
    end

    def unauthorize
      json_response( {
        status: :unauthorized,
        code: 401,
        message: 'Bad credentials'
        }, nil ,:unauthorized)
    end
  end
end
