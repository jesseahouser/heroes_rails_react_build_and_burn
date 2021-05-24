class HerosController < ApplicationController

  def index
    @heros = Hero.all
    render json: @heros, include: [:weapon, :powers]
  end

  def create
    @hero = Hero.create hero_params
    ## refactored using strong params
    # (
    #   name: params[:name],
    #   weapon_id: params[:weapon_id]
    # )

    # params[:powers].each do |power_id|
    #   HeroPower.create hero: @hero, power_id: power_id
    # end
    
    render json: @hero, include: [:weapon, :powers]
  end

  private
  
  def hero_params
    params.require(:hero).permit(:name, :weapon_id, power_ids: [])
  end

end
