
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ThumbsUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuestionsCardProps {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  upvotes: number;
  answers: number;
  timestamp: string;
  tags: string[];
}

const QuestionsCard = ({
  id,
  title,
  content,
  author,
  category,
  upvotes,
  answers,
  timestamp,
  tags
}: QuestionsCardProps) => {
  return (
    <Link to={`/community/question/${id}`}>
      <Card className="card-hover bg-white border-0 shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{upvotes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{answers}</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {content}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>by {author}</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{timestamp}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default QuestionsCard;
