<?php

Class Car
{
    public $spalva;
    public $greitis;
    private $rida;

    public function vaziuoti()
    {
        echo "Automobilis vaziuoja", $this->greitis . "greiciau";
        $this->rida += (int)$this->greitis;
    }

    public function gautiSpalva()
    {
        return $this->spalva;
    }

    public function gautiRida(): int
    {
        return $this->rida;
    }
}