import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputValue);
    setInputValue("");
  };

  return (
    <div className="container mx-auto mt-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>My Application</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Enter something..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;