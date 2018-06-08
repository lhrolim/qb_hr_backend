module Api
  module V1
    class UniversitiesController < ApiController
      PER_PAGE = 10

      def index
        universities = University.unscoped
        universities = universities.where("name like ?", "%#{params["name"]}%") unless params["name"] == nil

        paginate json: universities, per_page: PER_PAGE
     
      end
      
      def show
        json_response(University.find(params[:id]))
      end
    end
  end
end