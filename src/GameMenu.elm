module GameMenu where

import Effects exposing (Effects)
import Html exposing (..)
import Signal

type alias Model = List String

init : (Model, Effects Action)
init =
    ([ ], Effects.none)


-- Update

type Action = NoOp

update : Action -> Model -> (Model, Effects Action)
update action model =
  case action of
    NoOp ->
        (model, Effects.none)


-- View
view : Signal.Address Action -> Model -> Html
view address model =
  p [ ] [ text "hello" ]
