class VisitorsController < ApplicationController

def create
  Visitor.create(email: params[:email], position: params[:position], company: params[:company])
end

end
