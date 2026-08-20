interface PerformanceRequestEmailProps {
    request: {
      name: string;
      email: string;
      phone?: string;
      message?: string;
    };
  }
  
  export function PerformanceRequestEmail({
    request,
  }: PerformanceRequestEmailProps) {
    return (
      <div>
        <h2>New performance request</h2>
  
        <p>
          <strong>Name:</strong> {request.name}
        </p>
  
        <p>
          <strong>Email:</strong> {request.email}
        </p>
  
        {request.phone && (
          <p>
            <strong>Phone:</strong> {request.phone}
          </p>
        )}
  
        {request.message && (
          <p>
            <strong>Message:</strong>
            <br />
            {request.message}
          </p>
        )}
      </div>
    );
  }