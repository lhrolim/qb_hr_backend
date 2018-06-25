class Api::SubjectController < ActionController::Base
    include Response
    include ExceptionHandler
  
    PAGE_SIZE = 10
  
    def index
      subject = Subject.unscoped
  
      subjects = subject.take(PAGE_SIZE)
  
      respond_to do |format|
        format.json do
          json_response(subjects)
        end
      end
    end
  
    def show
      json_response(Subject.find(params[:id]))
    end
end
